const express = require('express')
const router = express.Router()

const register = require('../routers/user/register')
const login = require('../routers/user/login')
const checkAlreadyRegistered = require('../routers/user/check_already_registered')
const checkIfAccountExist = require('../routers/user/chec_if_account_exist')

router.post('/register',register)
router.post('/login',login)
router.post('/checkaccount',checkIfAccountExist)
router.post('/checkregistration',checkAlreadyRegistered)

module.exports = router