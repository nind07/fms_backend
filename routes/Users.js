const express = require("express")
const router = express.Router()
const userControler = require('../controllers/Users')

router.post('/register', userControler.registerUser)
router.post('/login', userControler.login)
router.post('/getAllUser',  userControler.getAllUser)
router.post('/updateUser', userControler.updateUser)

module.exports = router