const mongoose = require('mongoose');
require('dotenv').config();
// const mongoUrl = "mongodb+srv://sarmi:Gouri@1434@cluster0.fe0tk.mongodb.net/usersignup?retryWrites=true&w=majority";
const mongoUrl = process.env.MONGO_URL
mongoose.connect(mongoUrl, ({
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})).then(() => {
    console.log(`connected`);
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;