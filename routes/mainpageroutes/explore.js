const express = require('express')
const fs = require('fs')
const router = express.Router()


router.get('/', function(req, res){
    res.render('home_view/Vexplore')
})



module.exports = router