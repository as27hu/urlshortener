const express = require('express')
const router = express.Router();
const {handleGetAllUrls} = require('../controllers/url')




router.get('/',handleGetAllUrls)
router.get('/signup',(req,res)=>{
    return res.render('signup')
})
router.get('/login',(req,res)=>{
    res.render('login')
})


module.exports = router;