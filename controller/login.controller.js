const bycrypt = require('bcryptjs');
const createSchema = require('../models/createSchema');
const login = async(req, res) => {
    console.log(req.body);
    const {email, password} = req.body;
    try{
        if(!email || !password){
            res.status(404).json({message: "field sholud be filled"});
        }
        const findUser = await createSchema.findOne({email: email});
        res.send(findUser);
        console.log(findUser);
        if(findUser){
            const checkpassword = await bycrypt.compare(password, findUser.password);
            const token = await findUser.createToken();
            console.log(token);
        }
    }
    catch(err){
        console.log(err);
    };
};

module.exports = {
    login: login
};