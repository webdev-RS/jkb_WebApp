const express = require('express')
const router = express.Router()
const fileData = require('../../models/ncs_upload')
const sample = require("../../models/sample")


router.get('/', async (req, res)=>{
    const smpl =  await fileData.find({}.toArray,function(err, result){
        if(err){
            console.log(err)
        }else{
            res.render("home_view/Vexplore",{data:result.map(p => p.toJSON())} )
        }
    }).clone()
    
       })

module.exports = router