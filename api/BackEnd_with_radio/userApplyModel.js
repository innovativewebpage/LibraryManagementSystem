const mongoose = require('mongoose');





const userApplySchema = new mongoose.Schema({
  
  user_id: { type: String },
  book_id: { type: String },
  bname:{type:String},
  bprice: { type: Number },
  bauthor: { type: String },
  qty:{type:Number},
  createdAt: { type: Date }
  
  
   
});


const userModel = mongoose.model('UserApply', userApplySchema);

module.exports = userModel;



