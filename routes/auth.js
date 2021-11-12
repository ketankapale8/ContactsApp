const express = require('express');
const route = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/userlogin')

//register
route.post('/' , async (req,res)=>{
    try{
        const salt = bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(req.body.password , salt)
        const user = new User({
            username : req.body.username,
            password : hashedPassword
        });

        user.save();
        res.status(200).json({'user-registered' : user})
    }catch(err){
        res.status(404).json({'err':err})

    }
})

//login
route.post('/login/:id' , async (req , res)=>{
    try{
        await User.findbyId(req.body.id, {$set:req.body});
        res.status(200).json('login successful')
    }catch(err){
        res.status(404).json({'err': err})
    }
})

