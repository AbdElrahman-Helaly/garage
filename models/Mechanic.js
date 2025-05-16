const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Car = require('./Car');


const Mechanic = sequelize.define('Mechanic', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
    },
    experienceYears: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availability: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    hourlyRate: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

Mechanic.associate = (models) => {
    Mechanic.hasMany(models.Car,
        {
            foreignKey: 'mechanicId',
            onDelete: 'CASCADE'
        }
    )
};



module.exports = Mechanic;