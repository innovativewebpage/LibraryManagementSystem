const mongoose = require('mongoose');





const productSchema = new mongoose.Schema({
  book_id: { type:String },	
  bname: { type: String },
  bprice: { type: Number, default: 0 },
  noofbooks: { type: Number, default: 0},
  bauthor: { type: String }
   
});


const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;



