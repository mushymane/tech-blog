const { User } = require('../models');

const userData = [
    {
        username: 'user1',
        email: 'user1@gmail.com',
        password: 'wordpass'
    },
    {
        username: 'user2',
        email: 'user2@gmail.com',
        password: 'wordpass'
    },
    {
        username: 'user3',
        email: 'user3@gmail.com',
        password: 'wordpass'
    },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers;