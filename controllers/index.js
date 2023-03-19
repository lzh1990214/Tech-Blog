const router = require('express').Router();
// const withAuth = require('../utils/auth');

const apiRoutes = require('./api');
const homeRoutes = require('./home');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;