const bycrypt = require('bcryptjs');
const createSchema = require('../models/createSchema');
const authToken = require('./createToken');

const login = async(req, res) => {
    console.log(req.body);
    const {email, password, _id} = req.body;
    try{
        const findUser = await createSchema.findOne({email});
        console.log(findUser,);
        const checkpassword = await bycrypt.compare(password, findUser.password);
        console.log(checkpassword, "sarmis");
        if(checkpassword){
            const createtoken = await authToken.createAuthtoken({_id});
            console.log(createtoken);
            // res.cookie("cookiesname", createtoken);
            console.log("login");
            return res.status(200).send({message: "login succesfully",  
                                            token: createtoken,
                                            status: 200});
        }else{
            return res.status(400).json({message: "password is worng"})
        }
    }
    catch(err){
        console.log(err);
    };
};

module.exports = {
    login: login
};