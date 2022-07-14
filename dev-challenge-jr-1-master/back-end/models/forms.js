const Sequelize = require('sequelize');
const db = require('../db');

const Form = db.define('form', {
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

Form.sync().then(() => {
    console.log('Table Created')
})

module.exports = Form;
