const express = require('express')
const router = express.Router()
const user = require('../models/userdata')

router.get('/', function(req, res){
    res.render('signup/uppage', {uname: new user()})
})

router.post('/', function(req, res){
    const uname = new user({
        Username: req.body.username,
         Email: req.body.email,
        Password: req.body.pass
    })
    uname.save((err)=>{
        if(err){
            res.render('/signup')
        }else {
            res.redirect('/mainpage')
        }
    })
    
})


module.exports = router