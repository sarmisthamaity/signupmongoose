module.exports.userController = require('./user.controller');
module.exports.validationController = require('./validation.controller')
module.exports.signinController = require('./signin.controller');
module.exports.sessionLogsController = require('./sessionLogs.controller');
module.exports.signupController = require('./signup.controller');
module.exports.loginwithGoogleController =  require('./loginwithGoogle.controller');


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