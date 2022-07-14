const Sequelize = require('sequelize');

// Sequelize('database', 'username', 'password)
const db = new Sequelize('eka', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.authenticate()
    .then(() => console.log("connected db"))
    .catch(err => console.log(err));
module.exports = db;