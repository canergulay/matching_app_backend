require('../mongodb/config')


const express = require('express')
const interestRouter = require('../../config/interest_injector')

const smsVerificationRoute = require('../verification_router_injector')

const app = express()



app.use(express.json());
app.use(express.raw());
app.use(express.text());
//you should use those stuff before your routes.

app.use(interestRouter)  
app.use(smsVerificationRoute)



module.exports = app