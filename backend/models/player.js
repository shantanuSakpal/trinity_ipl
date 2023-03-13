var mongoose = require("mongoose")

var playerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
        
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    },
    runs:{
        type:Number
    }
})

module.exports = mongoose.model("Player",playerSchema)