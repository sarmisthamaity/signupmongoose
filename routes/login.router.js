const router = require('./serverRoute');
const logincontroller = require('../controller/login.controller');

router.post('/log', logincontroller.login)
    
module.exports = router;