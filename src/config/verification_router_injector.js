const express = require('express')
const router = express.Router()
const {sendSMS,verifySMS} = require('../routers/sms_verification_router')
const {sendmail,verifymail} = require('../routers/email_verification_router')
const Interest = require('../models/interest')
const SubInterest = require('../models/subinterest')




router.post('/auth/sendmail',sendmail)
router.post('/auth/verifymail',verifymail)


//for now we will go on with only email verification for the sake of affordability.


//not an active feature, we will may put aside since it is too expensive to maintain
//An average per sms sent costs 0.02 $ which is 25 kuruş
//suppose we published the app and encountered a great number of people who liked and downloaded it,
// We would have to pay 250 turkish liras for 1000 users, which is unaffordable at the initial steps of this bussiness.
 
router.get('/auth/sendsms',sendSMS)
router.get('/auth/verifysms',verifySMS)

//maybe in the second or third version.

router.get('/subdeneme',async (req,res) => {
    const subInterestToSave = SubInterest({
        names:{
        "tr_TR":"Hintçe",
        "en_US":"Hindi"
        },
    interest:"613a0fb3568e3c1ed0b87101"})
    
    await subInterestToSave.save()

    res.send(subInterestToSave)
})

router.get('/deneme',async (req,res) => {
    const interestToSave = Interest({code:"sports",names:{
        
        
        "en_US":"Sports",
        "tr_TR":"Spor"
    }})
    

    await interestToSave.save()
  
    res.send('saved')
})

module.exports = router