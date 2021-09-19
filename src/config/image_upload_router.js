const express = require('express')
const router = express.Router()

const imageupload = require('../routers/image_upload_router')
const upload = require('../utils/upload/upload_user_image')

router.post('/imageupload',upload.single('image'),imageupload)

module.exports = router