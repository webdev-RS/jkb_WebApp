const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.render('index')
})
router.get('/uploadpage', (req, res) =>{
    res.render('upload')
})
module.exports = router