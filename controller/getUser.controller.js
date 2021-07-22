const createSchema = require('../models/createSchema');

module.exports.dataget = async(req, res) => {
    const name = req.params.name;
    const findname = await createSchema.findOne({name: name});
    console.log(findname);
    return res.status(200).send({message: "user have found",
                            data: findname,
                            status: 200});
};