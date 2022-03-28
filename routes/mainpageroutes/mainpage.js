const express = require('express')

const router = express.Router()

const fileData = require('../../models/ncs_upload')
const sample = require("../../models/sample")


router.get('/', async (req, res)=>{
    const smpl =  await fileData.find({}.toArray,function(err, result){
        if(err){
            console.log(err)
        }else{
            res.render("home_view/home",{data:result.map(p => p.toJSON())} )
        }
    }).sort({_id:-1}).limit(5).clone()
    
       })

module.exports = router