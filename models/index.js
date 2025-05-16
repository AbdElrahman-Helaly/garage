const { Sequelize } = require('sequelize');
const { sequelize } = require('../config/db');

const User = require('./user');
const Car = require('./Car');
//const Mechanic = require('./Mechanic');

const db = {
  User,
  Car,
  Sequelize

};

User.associate(db);
Car.associate(db);
//Mechanic.associate(db);





Object.values(db).forEach((model) => {
  if (model?.name) {
    console.log(`Checking model: ${model.name}`);
  } else {
    console.log('Model has no name');
  }

  if (typeof model.associate === 'function') {
    console.log(` Running associate for: ${model.name}`);
    model.associate(db);
  } else {
    console.log(`No associate function found for: ${model.name}`);
  }
});



module.exports = db;
