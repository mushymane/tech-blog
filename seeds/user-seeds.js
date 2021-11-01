const { User } = require('../models');

const userData = [
    {
        username: 'anonymous',
        email: 'welcometothesite@gmail.com',
        password: 'wordpass'
    },
    {
        username: 'randomuser1',
        email: 'welcometothesite2@gmail.com',
        password: 'wordpass'
    },
    {
        username: 'randomuser2',
        email: 'welcometothesite3@gmail.com',
        password: 'wordpass'
    }
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers;