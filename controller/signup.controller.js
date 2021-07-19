var createSchema = require('../models/createSchema');
const bycrypt = require('bcryptjs');
const joi = require('joi');
const createUser = async(req, res) => {
    const Schema = joi.object().keys({
        name: joi.string().alphanum().max(10).min(3).required(),
        email: joi.string().min(5).email().required(),
        password: joi.string().alphanum().max(20).min(1).required(),
        cPassword: joi.string().alphanum().max(20).min(1).required(),
        dateofBirth: joi.date().min('1-1-1900').max('1-1-2021').required()
    });
    const datavalidate = Schema.validate(req.body);
    if(datavalidate.error){ 
        res.status(400).send(datavalidate.error.details[0].message)
    }else{
        const {name, email, password, cPassword, dateofBirth} = req.body;
        await bycrypt.hash(password, 10);
        await bycrypt.hash(cPassword, 10);
    // if(!name || !email || !password || !cPassword || !dateofBirth){
    //     return res.status(400).json({error: "all filled are required"});
    // }
        try{
            const userExits = await createSchema.findOne({email: email})
            if(userExits){
                console.log("user exits");
                return res.status(400).json({error: "email is already used"})
            }
            else if(password != cPassword){
                return res.status(400).json({message: "password is not equal"});
            }else{
                const newUser = new createSchema({name, email, password, cPassword, dateofBirth})
                const saveUser = await newUser.save();
                console.log(saveUser, "rtyue");
                if(saveUser){
                    console.log(req.body);
                    res.status(201).send({message: "new user created"})
                };
            };
        }catch(err){
            console.log(err);
            };
        };
    };
module.exports = {
    createUser: createUser
};