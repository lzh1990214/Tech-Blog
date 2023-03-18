const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model { }

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        commenter: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        commenter_first: {
            type: DataTypes.STRING,
            // references: {
            //     model: 'user',
            //     key: 'first_name',
            // },
            allowNull: false,
        },
        commenter_last: {
            type: DataTypes.STRING,
            // references: {
            //     model: 'user',
            //     key: 'last_name',
            // },
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'posts',
                key: 'id',
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    }
);

module.exports = Comments;
