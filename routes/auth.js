const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require('../config')
const authController = require('../controllers/authController')



// Login & Logout routes
router.post("/authenticate", authController.authenticate);

module.exports = router;
