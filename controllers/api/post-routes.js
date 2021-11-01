const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// *** UNCOMMENT WHEN READY FOR FRONTEND ***
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User }, { model: Comment }]
        })
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User }, { model: Comment }]
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with that id' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// *** REPLACE WITH THIS AFTER TESTING ***
router.post('/', withAuth, async (req, res) => {
// router.post('/', async (req, res) => {
    try {
        // console.log(req.body) // returns { title: 'new post 3', text: 'HELLOOOOO', user_id: 2 }
        const newPost = await Post.create({
            ...req.body,
            // *** UNCOMMENT WHEN DONE WITH TESTING ***
            user_id: req.session.user_id
        });

        res.status(200).json(newPost);
        // res.redirect('/dashboard')
    } catch (err) {
        res.status(400).json(err);
    }
})

// Update?
router.put('/:id', async (req, res) => {
    try {
        console.log(req.body)
        const updatedPost = await Post.update(
            ...req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        )

        // console.log(updatedPost[0])
        // console.log(updatedPost)
        if (updatedPost[0] === 0) {
            res.status(404).json({ message: 'Unable to find post with that id, or requested post name is the same as current' })
            return;
        }

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err)
    }
})

// *** REPLACE WITH THIS AFTER TESTING ***
router.delete('/:id', withAuth, async (req, res) => {
// router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                // *** UNCOMMENT WHEN DONE WITH TESTING ***
                user_id: req.session.user_id
            }
        })

        if (!postData) {
            res.status(404).json({ message: 'No post found with that id' });
            return;
        }

        res.status(200).json(postData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/:id/comment', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            post_id: req.params.id,
            user_id: req.session.user_id
        })

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
})

// Delete comment?
// router.delete('/:id/:cid', withAuth, async (req, res) => {
//     try {
//         const commentData = await Comment.destroy({
//             where: {
//                 id: req.params.cid,
//                 post_id: req.params.id,
//                 // *** UNCOMMENT WHEN DONE WITH TESTING ***
//                 user_id: req.session.user_id
//             }
//         })

//         if (!commentData) {
//             res.status(404).json({ message: 'no comment found with that id' });
//             return;
//         }

//         res.status(200).json(commentData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

module.exports = router;