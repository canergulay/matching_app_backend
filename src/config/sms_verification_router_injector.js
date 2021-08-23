const express = require('express')
const router = express.Router()
const {sendSMS,verifySMS} = require('../routers/sms_verification_router')

router.get('/sendsms',sendSMS)
router.get('/verifysms',verifySMS)

module.exports = router