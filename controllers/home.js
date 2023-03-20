const router = require('express').Router();
const User = require('../models/User');
const Posts = require('../models/Posts');
const Comments = require('../models/Comments');

router.get('/', async (req, res) => {
    console.log("inside / controller");
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
        
        console.log(postsData);

        // Serialize data so the template can read it
        const posts = postsData.map((post) => post.get({ plain: true }));
        // console.log(posts[0].comments[0]);
        // Pass serialized data and session into template
        console.log(req.session);
        const logged_in = req.session.logged_in;

        if (logged_in) {

            const currentUserData = await User.findOne({
                where: { id: req.session.user_id }
            });
            const currentUser = currentUserData.get({ plain: true });
            res.render('homepage', {
                currentUser,
                posts,
                logged_in
            });
        } else {
            res.render('homepageguest', {
                posts,
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    };
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = router;