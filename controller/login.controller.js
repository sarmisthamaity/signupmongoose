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
        console.log(findUser);
        const checkpassword = await bycrypt.compare(password, findUser.password);
        console.log(checkpassword);
        if(checkpassword){
            // const checkpassword = await bycrypt.compare(password, findUser.password);
            const token = await findUser.createToken();
            console.log(token);
            res.status(200).json({message: "login succesfully"});
        }else{
            res.status(400).json({message: "password is worng"})
        }
    }
    catch(err){
        console.log(err);
    };
};

module.exports = {
    login: login
};