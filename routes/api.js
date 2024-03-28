const express = require("express")
const router = express.Router()
const user = require('./Users')


router.use('/user', user)


module.exports = router