const express = require('express')
const router = express.Router()
const multer = require("multer")
const path = require("path")

const fileData = require('/Users/Admin10/jkb_WebApp/models/ncs_upload')



router.get('/', function(req, res){
    res.render('home_view/Vupload',{addfiledata: new fileData()}
    )
})
//var uploadedfilename = new fileName
const multerstorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null , 'public/NCS');
        },
    filename: function (req, file, callback) {
        const fileName = file.originalname.toLowerCase().split(' ').join('');
        callback(null, fileName)
            }
})

// add multer filter function to check file type

const upload = multer({
    storage: multerstorage
})

router.post('/',upload.single('ncsfile'),(req, res)=>{
    const addfiledata = new fileData({
        MusicName:req.body.ncsname,
        CreaterName:req.body.creater,
        UploadDate:req.body.date,
        FileLocation:'public/NCS/'+req.body.ncsname+'.mp3'

    })
     addfiledata.save((err)=>{
        if(err){
            res.render('/upload')
            res.send('error while uploading')
        }else {
            res.send('uploaded')
        }
    })
})

module.exports = router