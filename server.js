
// project dependencies
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv').config('./dotenv')
const bodyparser = require('body-parser')

// importing routes
const homeRouter = require('./routes/home')
const rgRouter = require('./routes/signup')
const inRouter = require('./routes/signin')
const mpRouter = require('./routes/mainpage')

app.set('view engine' , 'ejs')
app.set('views' , __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyparser.urlencoded({limit: '20mb' , extended: false}))

//database connection
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
     useUnifiedTopology: true
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
})



app.use('/', homeRouter)
app.use('/signup', rgRouter)
app.use('/signin', inRouter)
app.use('/mainpage', mpRouter)


app.listen(process.env.PORT || 3000);