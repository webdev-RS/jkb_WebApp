

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv').config('./dotenv')

const homeRouter = require('./routes/home')

app.set('view engine' , 'ejs')
app.set('views' , __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

//database connecti
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



app.listen(process.env.PORT || 3000);