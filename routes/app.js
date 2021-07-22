const router = require('./serverRoute');

const signuproute = require('./signup.router');
const login = require('./login.router');
const getdata = require('./dataget.router');

router.use('/', getdata);
router.use('/sign', signuproute);
router.use('/log', login);

module.exports = router ;