const mongoose = require('mongoose');

const Userlogin = new mongoose.Schema({
    Email : {
        type : String,
    },
    Password : {
        type : String
    },
},
    {timeStamps: true}
)

module.exports = mongoose.model('userlogin' , Userlogin)