const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.render('signin/inpage')
})

router.get('/signin', function(req, res){
    res.render('')
})


module.exports = router