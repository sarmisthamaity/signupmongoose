const router = require('./serverRoute');
const getcontroller = require('../controller/getUser.controller');

router.get('/:name', getcontroller.dataget);

module.exports =  router ;