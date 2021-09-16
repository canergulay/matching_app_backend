const mongoose = require('mongoose')

//This is the model that we will use in order to store verificationcode - email adress pairs

const interestSchema = mongoose.Schema({
    code:{type:String},
})

const Interest = mongoose.model('Interest',interestSchema)

module.exports = Interest