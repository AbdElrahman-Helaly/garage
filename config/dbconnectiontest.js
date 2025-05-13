const { sequelize } = require('./db');

async function testConnection(params) {
    try {
        await sequelize.authenticate();
        console.log('Connection done succufully.........');
    }
    catch (error) {
        console.error('Error done !!', error);
    }
};

module.exports = testConnection;


