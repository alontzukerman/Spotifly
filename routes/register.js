const { Router } = require('express');

const { Users } = require('../models');

const router = Router();


router.post('/', async (req,res) => {
    const {fullName,username,password} = req.body ;
    const user = await Users.findOne({
        where: {username}
    });
    if(user) { 
        return res.status(403).json({
            errorMessage: 'Username is already taken'
        });
    }
    let newUser = await Users.create({
        fullName: fullName,
        username: username,
        password: password
    });
    return res.json({
        success: true
    });
});

module.exports = router ;