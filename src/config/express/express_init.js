require('../mongodb/config')


const express = require('express')
const interestRouter = require('../../config/interest_injector')
const imageuploadRouter = require('../../config/image_upload_router')
const smsVerificationRoute = require('../verification_router_injector')
const userRoute = require('../user_router_injector')

const app = express()



app.use(express.json());
app.use(express.raw());
app.use(express.text());
//you should use those stuff before your routes.

app.use(smsVerificationRoute)
app.use(userRoute)
app.use(interestRouter)  
app.use(imageuploadRouter)



module.exports = app