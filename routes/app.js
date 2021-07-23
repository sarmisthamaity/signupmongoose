const router = require('./serverRoute');

const signuproute = require('./signup.router');
const login = require('./login.router');
const getdata = require('./byName.router');
const allusers = require('./users.router');

router.use('/alldata', allusers);
router.use('/byName/:name', getdata);
router.use('/sign', signuproute);
router.use('/log', login);

module.exports = router ;