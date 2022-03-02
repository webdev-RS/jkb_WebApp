const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('home_view/home')
})
router.get('/explore', function(req, res){
    res.render('home_view/Vexplore')
})

module.exports = router