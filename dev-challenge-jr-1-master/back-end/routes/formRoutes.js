const router = require('express').Router();
const db = require('../db');
const Forms = require('../models/forms');
const bcrypt = require('bcrypt');
const parser = require('../middleware/cookieParser');

router.get('/', async (req, res) => 
    await Forms.findAll()
        .then(forms => {
            console.log(forms);
            res.sendStatus(200)
        })
        .catch(err => console.log(err)));

router.post('/create', parser, async (req, res) => {
    try{
        console.log(req.uid)
        
        let data = {
            user_name: req.body.user_name || null,
            user_pw: req.body.user_pw || null,
            user_email: req.body.user_email || null,
            user_first: req.body.user_first || null,
            user_last: req.body.user_last || null,
            user_phone: req.body.user_phone || null,
            user_street: req.body.user_street || null,
            user_city: req.body.user_city || null,
            user_state: req.body.user_state || null,
            user_zip: req.body.user_zip || null
        }
        if(!data.user_pw){
           return res.status(400).send('Invalid password');
        } 
        if(!data.user_email){
            return res.status(400).send('Invalid email');
        }
        else {
            const salt = await bcrypt.genSalt(10); 
            data.user_pw = await bcrypt.hash(data.user_pw, salt)
            const dbResponse = await Forms.create(data);
            res.cookie('uid', dbResponse.id, {maxAge: 24 * 60 * 60 * 1000});
            console.log(dbResponse);
            return res.status(200).json({success: true});
        }
    }catch(err){
        console.error(err.message);
        return res.status(400).send('Server Error');
    }
});

// // authenticate where uid = current cookie
router.put('/update', parser, async(req, res) => {
    try {
        console.log(req.uid)
        let data = {
            user_name: req.body.user_name || null,
            user_pw: req.body.user_pw || null,
            user_email: req.body.user_email || null,
            user_first: req.body.user_first || null,
            user_last: req.body.user_last || null,
            user_phone: req.body.user_phone || null,
            user_street: req.body.user_street || null,
            user_city: req.body.user_city || null,
            user_state: req.body.user_state || null,
            user_zip: req.body.user_zip || null
        }
        if(!data.user_pw){
            return res.status(400).send('Invalid password');
         } 
         if(!data.user_email){
             return res.status(400).send('Invalid email');
         }
         else{
            const salt = await bcrypt.genSalt(10); 
            data.user_pw = await bcrypt.hash(data.user_pw, salt)
            const dbResponse = await Forms.update(data, {where: {user_name: req.body.user_name}})
            return res.status(200).json({success: true});
         }
    }catch(err){
        console.error(err.message);
        return res.status(400).send('Server Error');
    }
});
module.exports = router;