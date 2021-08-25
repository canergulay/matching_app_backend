const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    uname:{
        type:String,
    },
    mail:{
        type: String, 
    },
    
    onBoardCompleted:{
        type: Boolean, 
        default:false
    },    
},{timestamps:true})

const User = mongoose.model('User',userSchema)

module.exports = User