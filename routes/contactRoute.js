const express = require('express');
const route = express.Router();
const ContactsModel = require('../models/contacts')

//add contact
route.post('/contacts' , async (req ,res)=>{
    try{
        const contact = await new ContactsModel({
            FirstName : req.body.FistName,
            MiddleName : req.body.MiddleName,
            LastName : req.body.LastName,
            Email : req.body.Email,
            ContactNumber : req.body.ContactNumber,
            ProfilePicture : req.body.ProfilePicture,
            LandlineNumber : req.body.LandlineNumber
        });

        contact.save();
        res.status(200).json({'contacts added': contact})

    }catch(err){
        console.log(err)
    }
});


//show contact

route.get('/' , async (req, res)=>{
    try{
        const contact = await ContactsModel.find(req.body);
    }catch(err){
        console.log(err)
    }
})

module.exports = route;