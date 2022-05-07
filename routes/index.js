const express = require('express')
const router = express.Router()
const home = require('./modules/home')
//const restaurant = require('./modules/restaurant')

router.use('/', home)
// 匯出路由器
module.exports = router