const express = require('express')
const{addUser} = require("../controller/user-controller")
const router = express.Router()

router.post('/new_user', addUser )

module.exports = router; 