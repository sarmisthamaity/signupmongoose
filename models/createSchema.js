const connection = require('../database/connection')
const mongoose = require('mongoose');
const joi = require('joi');
const bycrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cPassword: {
        type: String,
        required: true
    },
    dateofBirth: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

/*
userSchema.methods.createToken = async function(){
    try{
        Token = jwt.sign({_id: this._id}, process.env.SERECT_KEY);
        this.tokens = this.tokens.concat({token: Token})
        const s = await this.save()
        console.log(s);
        return Token
    }catch(err){
        console.log(err);
    };
};
*/

const usermodel = new mongoose.model('collections', userSchema);
module.exports = usermodel;
