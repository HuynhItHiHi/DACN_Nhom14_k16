const express= require('express')
const router=express.Router();
const {getHomePage,getImage} = require('../controllers/homeController')

router.get('/',getHomePage)
router.get('/image',getImage)

module.exports = router