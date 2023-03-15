const User = require('./User');
const Comments = require('./Comments');
const Posts = require('./Posts');

User.hasMany(Posts, {
    foreignKey: 'author',
    onDelete: 'CASCADE',
});

Posts.belongsTo(User, {
    foreignKey: 'author',
});

// add association between comments and posts. 
User.hasMany(Comments, {
    foreignKey: 'commenter',
    onDelete: 'CASCADE',
});

Comments.belongsTo(User, {
    foreignKey: 'commenter',
});


Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
});

module.exports = { User, Posts, Comments };

