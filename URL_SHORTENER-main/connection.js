const {default:mongoose} = require('mongoose');

async function createMongooseConnection(){
   return mongoose.connect('mongodb://127.0.0.1:27017/rajatsurlshortener')
    .then(()=>console.log('MongoDb connected !'))
    .catch((err)=>console.log('mongodb error ', err))
}

module.exports = {
    createMongooseConnection,
}