const bycrypt = require('bcryptjs');
const createSchema = require('../models/createSchema');
// const jwt = require('jsonwebtoken');
const authToken = require('./createToken');
// console.log(authToken.createAuthtoken);


const login = async(req, res) => {
    console.log(req.body);
    const {email, password, _id} = req.body;
    try{
        const findUser = await createSchema.findOne({email});
        console.log(findUser,);
        const checkpassword = await bycrypt.compare(password, findUser.password);
        console.log(checkpassword, "sarmis");
        if(checkpassword){
            const authToken = require('./createToken');
            const createtoken = await authToken.createAuthtoken({_id});
            console.log(createtoken, "234");
            // res.cookie("cookiesname", createtoken);
            console.log("login");
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