const router = require('express').Router();
const { Post, Comment, User } = require('../../models');

// *** UNCOMMENT WHEN READY FOR FRONTEND ***
// const withAuth = require('../../utils/auth');


// *** REPLACE WITH THIS AFTER TESTING ***
// router.post('/', withAuth, async (req, res) => {
router.post('/', async (req, res) => {
    try {
        // const newComment = await Comment.create({
        //     ...req.body,
        //     // *** UNCOMMENT WHEN DONE WITH TESTING ***
        //     // post_id: req.params.id,
        //     // user_id: req.session.user_id
        // });

        const newComment = await Comment.create(req.body);

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
})

// *** REPLACE WITH THIS AFTER TESTING ***
// router.delete('/:id', withAuth, async (req, res) => {
router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                // *** UNCOMMENT WHEN DONE WITH TESTING ***
                // user_id: req.session.user_id
            }
        })

        if (!commentData) {
            res.status(404).json({ message: 'no comment found with that id' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{ model: Post }, { model: User }]
        });

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id, {
            include: [{ model: Post }, { model: User }]
        })

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with that id' })
        }

        res.status(200).json(commentData)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;