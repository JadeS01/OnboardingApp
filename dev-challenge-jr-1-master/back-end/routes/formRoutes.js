const router = require('express').Router();
const db = require('../db');
const user = require('../models/user');

router.get('/', async (req, res) => 
    await user.findAll()
        .then(users => {
            console.log(user);
            res.sendStatus(200)
        })
        .catch(err => console.log(err)));
module.exports = router;