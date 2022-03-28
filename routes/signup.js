const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const user = require('../models/userdata')
const bcrypt = require('bcrypt')

router.get('/', function(req, res){
    res.render('signup/uppage', {uname: new user()})
})

router.post('/',  async (req, res)=>{

    try{
    const hashedPassword =  await bcrypt.hash(req.body.pass, 10)
    const uname = new user({
        email: req.body.email,
        username: req.body.username,  
        password: hashedPassword
    }).save()
    res.redirect("/home")           
    } catch {
           res.redirect("/signup")
          }
     
  })



module.exports = router