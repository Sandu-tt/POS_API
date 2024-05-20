const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    Fullname: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    Password: {
        type:String,
        required:true,
    },
   activeState: {
        type:Boolean,
        required:true,
    },
});

module.exports=mongoose.model('user', UserSchema);