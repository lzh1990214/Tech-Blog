const router = require('express').Router();
const Posts = require('../../models/Posts');
const User = require('../../models/User');

router.get('/', async (req, res) => {
    try {
        const postsData = await Posts.findAll({
            include: [{ model: User }],
        });

        // const user = await User.findOne({ where: { id: req.session.user_id } });
        const userData = user.get({ plain: true });

        const posts = postsData.map((post) => post.get({ plain: true }));
        // console.log(posts);
        // res.status(200).json(posts);
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

router.get('/:id', async (req, res) => {
    try {
        const postData = await Posts.findByPk(req.params.id);

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/addPost', async (req, res) => {
    try {

        const user = await User.findOne({ where: { id: req.session.user_id } });
        const userData = user.get({ plain: true });

        const post = await Posts.create({
            author: req.session.user_id,
            post_title: req.body.post_title,
            post_description: req.body.post_description
        });

        const postData = await Posts.findAll({
            include: [{ model: User }],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.post('/currentpost/:id', async (req, res) => {
//     try {
//         const currentUser = req.session.user_id;

//         const userData = await User.findOne({ where: { id: currentUser } });
//         if (!userData) {
//             res
//                 .status(400)
//                 .json({ message: 'Incorrect email or password, please try again' });
//             return;
//         }

//         const user = userData.get({ plain: true });

//         const post = await Posts.update(
//             {
//                 author: currentUser,
//                 post_title: user.first_name,
//                 responder_last_name: user.last_name,
//             },
//             {
//                 where: {
//                     id: req.params.id,
//                 },
//             }
//         );
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
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

module.exports = router;
