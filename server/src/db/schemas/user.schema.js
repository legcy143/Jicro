const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    phone_number: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        require: true
    },
    location: {
        long: {
            type: Number,
            require: true
        },
        lat: {
            type: Number,
            require: true
        }
    },
    orders:[
        {
            services:{
                type:mongoose.Types.ObjectId,
                ref:"Service"
            },
            provider:{
                type:mongoose.Types.ObjectId,
                ref:'ServiceProvider'
            },
            status:{
                type:String,
                required:true
            },
            orderID:{
                type:mongoose.Types.ObjectId
            }
        }
    ],
    refers:[
        {
            referedTO:{
                type:mongoose.Types.ObjectId,
                ref:"User"
            }
        }
    ],
    searches:[
        {
            term:String
        }
    ],
    token:{
        type:String,
        required:true
    }

})

module.exports = userSchema