const mongoose = require('mongoose')


const fileupload = new mongoose.Schema({
   MusicName:{
       type: String,
       required: true
   },
   CreaterName:{
        type: String,
        required: true
    },
   UploadDate:{
        type: String,
        required: true
        },
    FileLocation:{
        type: String,
        required: true
       }
     
                       

})
 module.exports = mongoose.model('useruploads',fileupload )