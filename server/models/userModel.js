const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    task:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    doubt:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },

})

const UserModel = mongoose.model("reports", userSchema);
module.exports=UserModel;
