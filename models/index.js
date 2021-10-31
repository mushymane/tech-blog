const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const PostComment = require('./PostComment');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

Post.belongsTo(User, {
    foreignKey: 'user_id',
})

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    // onDelete: 'CASCADE',
    // onUpdate: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE',
    // onUpdate: 'CASCADE'
})

module.exports = { User, Post, Comment, PostComment };