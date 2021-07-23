const createSchema = require('../models/createSchema');

module.exports.allUsers = async(req, res) => {
    const Users = await createSchema.find({});
    console.log(Users);
    return res.status(200).send({status : 200,
                                    users: Users})
};