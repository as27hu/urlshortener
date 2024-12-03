const User = require('../models/user')
const { v4:uuidv4 } = require('uuid')
const {setUser,getUser} = require('../service/auth')
async function handleGenerateNewUser(req,res){
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    })
    return res.render('home')
}

async function handlUserLogin(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user){
        return res.render('login',{
            error : 'Invalid username or password'
        });
    }
    
        const token = setUser(user);
        console.log(token);
        res.cookie('uid',token);    
        return res.redirect('/')

}

module.exports = {
    handleGenerateNewUser,
    handlUserLogin,
}