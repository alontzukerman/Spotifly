const { Router } = require('express');
let jwt = require('jsonwebtoken');

const { Users } = require('../models');

const router = Router();


router.post('/', async (req,res) => {
    const {username,password} = req.body ;
    const user = await Users.findOne({
        where: { username , password }
    });
    if(!user) { 
        return res.status(403).json({
            errorMessage: 'Wrong login details'
        })
    }
    let token = jwt.sign({username: username},
        process.env.JWT_SECRET,
        { expiresIn: '24h'});
    
    return res.json({
        success: true,
        fullName: user.fullName,
        token
    });
});

module.exports = router ;