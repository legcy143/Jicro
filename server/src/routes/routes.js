const express = require("express")

const route = express.Router()

// Auth
const auth_user = require("../controllers/auth.controller")

route.post("/auth-user",auth_user)

module.exports = route