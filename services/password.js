const createSchema = require('../models/createSchema');
const bycrypt = require('bcrypt');
const hasPassword = async function(req, res){
    const { password, cPassword } = req.body;
    const bcryptpassword = await bycrypt.hash(password);
    const bcryCptpassword = await bycrypt.hash(cPassword);
    console.log(bcryptpassword, bcryCptpassword);
    
};
module.exports = hasPassword;