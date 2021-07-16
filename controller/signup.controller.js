const createSchema = require('../models/createSchema');
const createUser = async(req, res) => {
    const {name, email, password, cPassword, dateofBirth} = req.body;
    if(!name || !email || !password || !cPassword || !dateofBirth){
        return res.status(400).json({error: "all filled are required"});
    }
    try{
        const userExits = await createSchema.findOne({email: email})
        if(userExits){
            console.log("user exits");
            res.status(400).json({error: "email is already used"})
        }
        else if(password != cPassword){
            res.status(400).json({message: "password is not equal"});
        }else{
            const newUser = new createSchema({name, email, password, cPassword, dateofBirth})
            const saveUser = await newUser.save();
            if(saveUser){
                console.log(req.body);
                res.status(201).json({message: "new user created"})
            };
        };
    }
    catch(err){
        console.log(err);
    };
};

module.exports = {
    createUser: createUser
} ;