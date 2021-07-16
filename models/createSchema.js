const jwt = require('jsonwebtoken');
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
        type: Number,
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

// bcrypt the password
userSchema.pre('save', function(next){
    if(this.isModified('password')){
        this.password = bycrypt.hashSync(this.password)
        this.cPassword = bycrypt.hashSync(this.cPassword)
    }
    next()
});

// create token 
userSchema.methods.createToken = async function(){
    try{
        Token = jwt.sign({_id: this._id}, "pooja");
        this.tokens = this.tokens.concat({token: Token})
        const s = await this.save()
        console.log(s);
        return Token
    }catch(err){
        console.log(err);
    };
};


const usermodel = new mongoose.model('collections', userSchema);
module.exports = usermodel;