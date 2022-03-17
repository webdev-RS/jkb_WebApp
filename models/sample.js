const mongoose = require('mongoose')


const sampledata = new mongoose.Schema({
   name:{
       type: String,
       required: true
   },
 
})
 module.exports = mongoose.model('smodels',sampledata )