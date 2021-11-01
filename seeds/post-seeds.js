const { Post } = require('../models');

const postData = [
    {
        title: 'Get started by signing up',
        text: 'Welcome to the Tech Blog',
        user_id: 1
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;