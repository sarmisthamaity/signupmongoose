const router = require('./serverRoute');
const express = require('express');
const app = express();
const signuproute = require('./signup.router');
const login = require('./login.router');

router.use('/sign', signuproute)
router.use('/log', login)

module.exports = router