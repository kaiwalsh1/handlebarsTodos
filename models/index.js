const User = require('./User');
const Todo = require('./Todo');

// Create the following connection in index.js
//     a User has many todos
//     a todo belongs to a user

User.hasMany(Todo, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Todo.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = {
    User,
    Todo,
};