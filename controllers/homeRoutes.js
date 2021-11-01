const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// *** UNCOMMENT WHEN FRONT END READY ***
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['username'] }]
        })

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['text', 'date_created', 'user_id']
                }
            ]
        })

        console.log(postData)
        const post = postData.get({ plain: true });
        console.log(post)

        res.render('post', {
            post,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }]
        });

        const user = userData.get({ plain: true })
        console.log(user)

        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/dashboard/new', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [{ model: Post }]
        })

        const user = userData.get({ plain: true })

        res.render('new', {
            ...user,
            logged_in: true
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/dashboard/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = await postData.get({ plain: true });

        res.render('edit', {
            ...post,
            logged_in: true
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
})

router.get('/signup', (req, res) => {
    res.render('signup');
})

module.exports = router;