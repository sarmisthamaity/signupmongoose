const signupController = require('../controller/signup.controller');
const router = require('./serverRoute');

router.post('/', signupController.createUser);
module.exports = router ;