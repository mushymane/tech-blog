const { Comment } = require('../models');

const commentData = [
    {
        text: 'What a great post',
        post_id: 1,
        user_id: 2
    },
    {
        text: 'What a bad post',
        post_id: 1,
        user_id: 3
    },
    {
        text: 'This is cool',
        post_id: 2,
        user_id: 3
    },
    {
        text: 'Isnt it?',
        post_id: 2,
        user_id: 2
    },
    {
        text: 'Wow amazing',
        post_id: 3,
        user_id: 1
    },
    {
        text: 'So inspiring',
        post_id: 3,
        user_id: 2
    },
    {
        text: 'Get off the internet',
        post_id: 3,
        user_id: 3
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;