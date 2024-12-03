const jwt = require('jsonwebtoken')
const secret = "Rajat$123@$"

function setUser(user){
    const token =  jwt.sign({
        _id : user._id,
        email : user.email,
    },secret);
    console.log("Generated Token:", token);
    return token ;
}

function getUser(token){
    try{
        if(!token) return null;
        const decoded = jwt.verify(token,secret);
        return decoded;
    } catch(error){
        console.log("JWT verification failed",error.message)
        return null;
    }
}

module.exports = {
    setUser,
    getUser,

}