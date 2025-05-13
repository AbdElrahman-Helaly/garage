const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');



const Car = sequelize.define('Car',
    {
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.INTEGER
        },
        location: {
            type: DataTypes.STRING
            , unique: true
        }
    }

);
module.exports = Car;