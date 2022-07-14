const router = require('express').Router();
const db = require('../db');
const Forms = require('../models/forms');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => 
    await Forms.findAll()
        .then(forms => {
            console.log(forms);
            res.sendStatus(200)
        })
        .catch(err => console.log(err)));

router.post('/create', async (req, res) => {
    try{
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
        // let bcryptPassword = data.user_pw; 
        // if(bcryptPassword){
        //     const salt = await bcrypt.genSalt(10); 
        //     bcryptPassword = await bcrypt.hash(user_pw, salt);
        //     data.user_pw = bcryptPassword;
        // }
        await Forms.create(data);
        res.status(200).json({success: true});
    }catch(err){
        console.error(err.message);
    }
})

// router.put('/create', async(req, res) => {
//     try{
//         let data = {
//             user_name: req.body.user_name || null,
//             user_pw: req.body.user_pw || null,
//             user_email: req.body.user_email || null,
//             user_first: req.body.user_first || null,
//             user_last: req.body.user_last || null,
//             user_phone: req.body.user_phone || null,
//             user_street: req.body.user_street || null,
//             user_city: req.body.user_city || null,
//             user_state: req.body.user_state || null,
//             user_zip: req.body.user_zip || null
//         }
//         await Forms.update(data, {where: {user_name: req.body.user_name}});
//     }catch(err){
//         console.error(err.message);
//     }
// })

router.get('/add', async (req, res) => {
    const data = {
        user_name:'test2',
        user_pw: 'password22',
        user_email: 'e2@e.com',
        user_first:'first2',
        user_last: 'last2',
        user_phone: '1234567892',
        user_street: 'street2',
        user_city: 'Sf2',
        user_state: 'CA2',
        user_zip: '123452'
    }
    let {user_name, user_pw, user_email, user_first, user_last, user_phone, user_street, user_city, user_state, user_zip} = data;
    Forms.create({
        user_name, user_pw, user_email, user_first, user_last, user_phone, user_street, user_city, user_state, user_zip
    })
        .then(form => res.redirect('/form'))
        .catch(err => console.error(err.message));
    
})
module.exports = router;