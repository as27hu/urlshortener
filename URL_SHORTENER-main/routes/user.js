const express = require ('express')
const router = express.Router();
const {handleGenerateNewUser,handlUserLogin} = require('../controllers/user')


router.post('/',handleGenerateNewUser);
router.post('/login',handlUserLogin)


module.exports = router ;