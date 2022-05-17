const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    forignKey: 'user_id'
});

// defines relationship of Post model to the User
// constraint here is that a post ca nbeling to one user, but not many users
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };