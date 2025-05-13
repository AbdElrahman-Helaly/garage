const dbConfig = require('../config/config');
const express = require('express');

const app = express();


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connication done");
  }
  catch (error) {
    console.log(error);
  }
  finally {
    await sequelize.close();
  }
}


testConnection();

module.exports = sequelize;