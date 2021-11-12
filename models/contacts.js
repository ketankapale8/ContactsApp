const mongoose = require('mongoose');

const ContactsModel = new mongoose.Schema({
    FirstName : {
        type : String,
    },
    MiddleName : {
        type : String,
    },
    LastName : {
        type : String,
    },
    Email : {
        type : String,
    },
    ContactNumber : {
        type : String,
    },
    ProfilePicture : {
        type : String,
        default : ""
    },
    LandlineNumber : {
        type: String
    }

},
    {timeStamps: true}
)

module.exports = mongoose.model('contactsModel' , ContactsModel)