const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
// const commentRoutes = require('');
// const withAuth = require('../utils/auth');

router.use('/user', userRoutes);
router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;