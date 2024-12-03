const express = require('express')
const PORT = 8001;
const app = express();
const {createMongooseConnection} = require('./connection')

const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRoute')
const userRoute = require('./routes/user')
const cookieParser = require('cookie-parser')
const {handleRedirectUrl} = require('./controllers/url')
const URL = require('./models/url')
const path = require('path')
const { restrictToLoggedInUserOnly,checkAuth } = require('./middleware/auth')

createMongooseConnection();


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.use('/url',restrictToLoggedInUserOnly,urlRoute);
app.use('/',checkAuth,staticRoute);
app.use('/user',userRoute);

app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

app.listen(PORT,()=>console.log('Server started at port 8001...'))