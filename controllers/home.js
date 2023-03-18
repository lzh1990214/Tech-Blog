const router = require('express').Router();
const User = require('../models/User');
const Posts = require('../models/Posts');
const Comments = require('../models/Comments');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postsData = await Posts.findAll({
            include: [
                {
                    model: User,
                    attributes: ['first_name', 'last_name'],
                },
                {
                    model: Comments,
                    attributes: ['comment_description', 'commenter', 'commenter_first', 'commenter_last', 'date_created'],
                }
            ],
        });
        // Serialize data so the template can read it
        const posts = postsData.map((post) => post.get({ plain: true }));
        // console.log(posts);
        // console.log(posts[0].comments[0]);
        // Pass serialized data and session flag into template
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }


});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


// router.get('/profile', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.session.user_id, {
//             include: [
//                 {
//                     model: Posts
//                 },
//                 {
//                     model: Comments
//                 }
//             ]
//         });
//         if (!userData) {
//             res.status(404).json({ message: 'No user with this id!' });
//             return;
//         }

//         const user = userData.get({ plain: true });
//         console.log(user);
//         res.render('profile', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     };
// });

// router.get('/newpost', withAuth, async (req, res) => {
//     res.render('newpost');
// });

module.exports = router;