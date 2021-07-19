const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

const signuproute = require('./routes/signup.router');
const login = require('./routes/login.router');


app.use('/sign', signuproute)
app.use('/log', login)


app.listen(process.env.PORT, () => {
    console.log(`server is running on this ${process.env.PORT}`);
});
