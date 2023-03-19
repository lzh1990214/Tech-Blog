const router = require('express').Router();
const Posts = require('../../models/Posts');
const User = require('../../models/User');
const Comments = require('../../models/Comments');
const withAuth = require('../../utils/auth');


// find all posts of the current user: http://localhost:3001/api/posts
router.get('/', withAuth, async (req, res) => {
    try {
        const postsData = await Posts.findAll({
            where: { author: req.session.user_id },
            include: [
                { model: User },
                {
                    model: Comments,
                    attributes: ['comment_description', 'commenter', 'commenter_first', 'commenter_last', 'date_created'],
                }],
        });

        const user = await User.findOne({ where: { id: req.session.user_id } });
        const userData = user.get({ plain: true });
        // console.log(userData);
        const posts = postsData.map((post) => post.get({ plain: true }));
        // console.log(posts);

        res.render('dashboard', {
            posts,
            userData,
            logged_in: req.session.logged_in
        }
        );
    } catch (err) {
        res.status(500).json(err);
    }
});

// http://localhost:3001/api/posts/1
// router.get('/:id', async (req, res) => {
//     try {
//         const postData = await Posts.findByPk(req.params.id);

//         if (!postData) {
//             res.status(404).json({ message: 'No post found with this id!' });
//             return;
//         }

//         res.status(200).json(postData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// http://localhost:3001/api/posts/addpost
router.post('/addpost', withAuth, async (req, res) => {
    try {
        // console.log(req);
        // const user = await User.findOne({ where: { id: req.session.user_id } });
        // const userData = user.get({ plain: true });
        const post = await Posts.create({
            author: req.session.user_id,
            post_title: req.body.post_title,
            post_description: req.body.post_description
        });
        console.log(post);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.put('/:id', withAuth, async (req, res) => {
    try {
        const post = await Posts.update(
            {
                author: req.session.user_id,
                post_title: req.body.post_title,
                post_description: req.body.post_description
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Posts.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// http://localhost:3001/api/posts/addcomment
router.post('/addcomment', withAuth, async (req, res) => {
    try {
        // console.log(req);
        const user = await User.findOne({ where: { id: req.session.user_id } });
        const userData = user.get({ plain: true });
        const comment = await Comments.create({
            commenter: req.session.user_id,
            comment_description: req.body.comment_description,
            commenter_first: userData.first_name,
            commenter_last: userData.last_name,
            post_id: req.body.post_id
        });

        console.log(comment);
        res.render('homepage', {
            comment,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;
