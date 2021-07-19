const bycrypt = require('bcryptjs');
const createSchema = require('../models/createSchema');
const jwt = require('jsonwebtoken');

const login = async(req, res) => {
    console.log(req.body);
    const {email, password, _id} = req.body;
    try{
        if(!email || !password){
            return res.status(199).json({message: "field sholud be filled"});
        }
        const findUser = await createSchema.findOne({email});
        console.log(findUser);
        const checkpassword = await bycrypt.compare(password, findUser.password);
        console.log(checkpassword);
        if(checkpassword){
            const createtoken = jwt.sign({_id: _id}, process.env.SERECT_KEY, {expiresIn: '5s'});
            console.log(createtoken);
            const token = await createSchema.createToken();
            return res.status(200).json({message: "login succesfully"});
        }else{
            return res.status(199).json({message: "password is worng"})
        }
    }
    catch(err){
        console.log(err);
    };
};

module.exports = {
    login: login
};