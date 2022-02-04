// require sequelize variables
const { Model, DataTypes, UUIDV4 } = require('sequelize');
// require sequelize connection
const sequelize = require('../config');


// create User class
class User extends Model {}

// create User table
User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user',
    }
);

module.exports = User;