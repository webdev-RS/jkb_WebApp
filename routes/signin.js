const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.render('signin/inpage')
})




module.exports = router