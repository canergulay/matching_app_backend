const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
    },
    usermail:{
        type: String, 
    },
    password:{
        type: String, 
    },
    studycode:{
        type:Number
    },
    fos:{
        type:String,
    },
    gender:{
        type:Number,
    },
    birthday:{
        type:Number
    },
    interestedin:{
        type:[Number]
    },
    interests:{
        type:[Number]
    },
    location: {
        type: { type: String },
        coordinates: [Number],
    },
    images:{
        type:[String]
    },
    onBoardCompleted:{
        type: Boolean, 
        default:false
    },    
},{timestamps:true})

const User = mongoose.model('User',userSchema)

module.exports = User