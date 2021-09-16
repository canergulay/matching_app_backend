const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//This is the model that we will use in order to store verificationcode - email adress pairs

const subInterestSchema = Schema({
    names:Object,
    interest:{type:Schema.Types.ObjectId},
})

const SubInterest = mongoose.model('SubInterest',subInterestSchema)

module.exports = SubInterest