const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
    },
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const uSchema = mongoose.model("User", userSchema);

module.exports = uSchema;