const mongoose = require('mongoose')

const verificationSchema = {
    code:{type:String},
    mail:{type:String},
    created:{type:Date,default:Date.now()}
}

const Verification = mongoose.model('Verification',verificationSchema)

module.exports = Verification