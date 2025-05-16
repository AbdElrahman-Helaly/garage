const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = require('./user');
const Mechanic = require('./Mechanic');



const Car = sequelize.define('Car',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
        },
        mechanicId: {
            type: DataTypes.INTEGER,

        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING
            , unique: true
        }
    });


Car.associate = (models) => {
    Car.belongsTo(models.User, {
        foreignKey: 'userId'
    });
    Car.belongsTo(models.Mechanic, {
        foreignKey: 'mechanicId'
    });
};



module.exports = Car;