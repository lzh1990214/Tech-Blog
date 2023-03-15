const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model { }

Posts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        author: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        // responder: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: 'user',
        //         key: 'id',
        //     },
        // },
        // responder_first_name: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        // responder_last_name: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        post_title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        post_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
        // post_date: {
        //     type: DataTypes.CHAR,
        //     allowNull: false,
        // },
        // post_time: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // }
        // comments_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: 'comments',
        //         key: 'id',
        //     },
        // },
        // likes_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: 'likes',
        //         key: 'id',
        //     },
        // },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: 'user',
        //         key: 'id',
        //     },
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts',
    }
);

module.exports = Posts;
