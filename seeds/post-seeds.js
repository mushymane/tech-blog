const { Post } = require('../models');

const postData = [
    {
        title: 'hey',
        text: 'wassup',
        user_id: 1
    },
    {
        title: 'hello',
        text: 'whats up',
        user_id: 2
    },
    {
        title: 'hi',
        text: 'whats gucci',
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;