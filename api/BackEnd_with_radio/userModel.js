const mongoose = require('mongoose');





const userSchema = new mongoose.Schema({
  
  urollno: { type: String },
  uname: { type: String },
  password:{type:Number},
  udept: { type: String },
  ucourse: { type: String },
  createdAt: { type: Date }
  
  
   
});


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;



