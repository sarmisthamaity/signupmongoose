require('dotenv').config();
const Jwt = require('jsonwebtoken');
module.exports.createAuthtoken = (Id) => {
    return Jwt.sign(Id, 
        process.env.SERECT_KEY)
        // { expiresIn: 60 * 60 * 24 }
};  