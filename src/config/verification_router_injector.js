const express = require('express')
const router = express.Router()
const {sendSMS,verifySMS} = require('../routers/sms_verification_router')
const {sendmail,verifymail} = require('../routers/email_verification_router')



router.post('/sendmail',sendmail)
router.post('/verifymail',verifymail)


//for now we will go on with only email verification for the sake of affordability.


//not an active feature, we will may put aside since it is too expensive to maintain
//An average per sms sent costs 0.02 $ which is 25 kuruş
//suppose we published the app and encountered a great number of people who liked and downloaded it,
// We would have to pay 250 turkish liras for 1000 users, which is unaffordable at the initial steps of this bussiness.
 
router.get('/sendsms',sendSMS)
router.get('/verifysms',verifySMS)

//maybe in the second or third version.

module.exports = router