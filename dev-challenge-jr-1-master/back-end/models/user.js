const Sequelize = require('sequelize');
const db = require('../db');

const user = db.define('user', {
    user_id: {
        type: Sequelize.INTEGER
    },
    user_name: {
        type: Sequelize.STRING
    },
    user_pw: {
        type: Sequelize.STRING
    },
    user_email: {
        type: Sequelize.STRING
    },
    user_first: {
        type: Sequelize.STRING
    },
    user_last: {
        type: Sequelize.STRING
    },
    user_phone: {
        type: Sequelize.STRING
    },
    user_street: {
        type: Sequelize.STRING
    },
    user_city: {
        type: Sequelize.STRING
    },
    user_state: {
        type: Sequelize.STRING
    },
    user_zip: {
        type: Sequelize.STRING
    }
})

module.exports = user;
