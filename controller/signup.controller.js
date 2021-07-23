const createSchema = require('../models/createSchema');
const bycrypt = require('bcryptjs');
const Joi = require('joi');

const createUser = async(req, res) => {
    const Schema = Joi.object().keys({
        name: Joi.string().alphanum().max(10).min(3).required(),
        email: Joi.string().min(5).email().required(),
        password: Joi.string().alphanum().max(20).min(1).required(),
        cPassword: Joi.string().alphanum().max(20).min(1).required(),
        dateofBirth: Joi.date().min('10-1-1900').max('1-1-2021').required()
    });
    const datavalidate = Schema.validate(req.body);
    console.log(datavalidate, "pppppp");
    if(datavalidate.error){ 
        return res.status(400).send(datavalidate.error.details[0].message)                   
    }else{                                             
        console.log("data is valitaed");                               
    };                                     
    try{                                             
        const {name, email, password, cPassword, dateofBirth} = req.body;                                
        const pass = await bycrypt.hash(password, process.env.GENRATESALT);
        const cpass = await bycrypt.hash(cPassword, process.env.GENRATESALT);
        const userExits = await createSchema.findOne({email: email});
        if(userExits){
            console.log("user exits");                   
            return res.status(400).json({message: "email is already exists"});
        }
        else if(password != cPassword){
            return res.status(400).json({message: "password is not equal"});
        }else{
            const newUser = new createSchema({name: name, email: email, password: pass, cPassword: cpass, dateofBirth: dateofBirth})
            const saveUser = await newUser.save();
            console.log(saveUser, "rtyue");
            if(saveUser){
                console.log(req.body);
                res.status(201).send({message: "signup successfull"})
            };
        };
    } catch(err){
        console.log("nhijkjkkjj");
        console.log(err);
    };
};
    
module.exports = {
    createUser
};
