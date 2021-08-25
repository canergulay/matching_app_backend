const mongoose = require('mongoose')

//This is the model that we will use in order to store verificationcode - email adress pairs

const verificationSchema = mongoose.Schema({
    code:{type:String},
    mail:{type:String},
    created:{type:Date,default:Date.now()}
})

const Verification = mongoose.model('Verification',verificationSchema)

module.exports = Verification