require('dotenv').config()
const express = require('express')
const app = express()
const smsVerificationRoute = require('../src/config/sms_verification_router_injector')

app.get('/', function (req, res) {
    res.send('hello world')
})

app.use(smsVerificationRoute)

app.listen(process.env.PORT)