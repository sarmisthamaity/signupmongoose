const express = require('express');
const app = express();
require('dotenv').config();
const port = 5978;
app.use(express.json());

const signuproute = require('./routes/signup.router.js');

const login = require('./routes/login.router.js');

app.use('/', signuproute);

app.use('/', login);

app.listen(port, () => {
    console.log(`server is running on this ${port}`);
});
