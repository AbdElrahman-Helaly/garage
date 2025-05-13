const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const bcrypt = require('bcrypt');


const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 50]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const hashedPassword = bcrypt.hashSync(value, 10);
            this.setDataValue('password', hashedPassword);
        }
    }



});

module.exports = User;