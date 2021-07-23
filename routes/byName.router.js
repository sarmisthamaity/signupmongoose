const router = require('./serverRoute');
const getcontroller = require('../controller/getUserByname.controller');

router.get('/', getcontroller.dataget);

module.exports =  router ;