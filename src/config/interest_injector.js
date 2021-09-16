const express = require('express')
const router = express.Router()

const interests = require('../routers/interest')

router.post('/interests',interests)

module.exports = router