const express = require('express')
const fs = require('fs')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('home_view/home')
})


module.exports = router