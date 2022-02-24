const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.send('mainpage')
})
router.get('/main', function(req, res){
    res.send('')
})

module.exports = router