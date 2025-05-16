const { Sequelize } = require('sequelize');
const dbConfig = require('./config');
require('dotenv').config();



const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];



const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        port: config.port,
        logging: false,
        dialectOptions: config.dialectOptions,
    }
);

sequelize.sync({ alter: true })
    .then(() => {
        console.log("Database synced and tables created!");
    })
    .catch((error) => {
        console.error("Error syncing database:", error);
    });


module.exports = { sequelize };
