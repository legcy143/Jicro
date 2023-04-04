const mongoose = require("mongoose")

const serviceProviderSchema = require("../schemas/serviceProvider.schema")

const User = mongoose.model("ServiceProvider",serviceProviderSchema)

module.exports = User