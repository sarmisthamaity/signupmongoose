const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

const route = require('./routes/app');

app.use('/', route);

app.listen(process.env.PORT, () => {
    console.log(`server is running on this ${process.env.PORT}`);
});
