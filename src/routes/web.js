const express= require('express')
const router=express.Router();
const {getHomePage,getImage,postCreateNewUser,
    getCreateNewUser,getUpdateUser,PostUpdateUser,
    getDeleteUser,postDeleteUser
} = require('../controllers/homeController')

router.get('/',getHomePage)
router.get('/image',getImage)

router.post('/update-user',PostUpdateUser)
router.get('/update/:IdUser',getUpdateUser)

router.get('/create-user-page',getCreateNewUser)
router.post('/create-user',postCreateNewUser)

router.get('/delete-user/:IdUser',getDeleteUser)
router.post('/delete-user',postDeleteUser)

module.exports = router