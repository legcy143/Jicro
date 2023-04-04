const User = require("../Db/models/User.model");
const jwt = require("jsonwebtoken");

const auth_user = async (req, res) => {
    try {
        const startTime = Date.now();
        const { phone_number, name } = req.body;
        const user = await User.findOne({ phone_number }).select("token")
        if (user) {
            const endTime = Date.now();
            const timeTaken = endTime - startTime;
            res.status(200).json({
                response: true,
                user: user,
                timeTaken: `${timeTaken}ms`,
            });
        } else {
            const user = new User({ phone_number, name });
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
            user.token = token;
            await user.save();
            const endTime = Date.now();  
            const timeTaken = endTime - startTime;
            res.status(200).json({
                response: true,
                user: user,
                timeTaken: `${timeTaken}ms`,
            });
        }
        

    } catch (error) {
        res.status(400).json({
            response: false,
            error: error.message,
        });
    }
};

module.exports = auth_user;
