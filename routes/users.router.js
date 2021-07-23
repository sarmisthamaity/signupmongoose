const router = require('./serverRoute');
const users = require('../controller/users.controller');

router.use('/', users.allUsers);

module.exports = router;