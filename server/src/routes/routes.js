const express = require("express")

const route = express.Router()

// Auth
const {auth_user,auth_serviceProvider} = require("../controllers/auth.controller")
const check = require("../middlewares/auth.middleman")
/**
* @Method POST
* @Route /auth-user
* @FOR USER's
*/
route.post("/auth-user",check,auth_user)
/** 
* @Method POST
* @Route /auth-service-provider
* @FOR ServiceProvider's
*/
route.post("/auth-service-provider",check,auth_serviceProvider)

module.exports = route