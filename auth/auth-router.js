const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require('express').Router();

const Users = require("./auth-model.js");
const { isValid } = require("./auth-model.js")

router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
