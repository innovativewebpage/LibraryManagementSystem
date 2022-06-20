const express = require('express')
const router = express.Router();


const UserApply = require('./userApplyModel');



router.post('/create',async (req,res) => {

 const userapply = new UserApply({	
	user_id : req.body.user_id,
    book_id : req.body.book_id,
	bname:req.body.bname,
	bprice: req.body.bprice,
	bauthor: req.body.bauthor,
	qty:req.body.qty,
    createdAt: Date.now()
  });
  
const newUserapply = await userapply.save();
  
  if (newUserapply) {
    return res
      .status(201)
      .send({ message: 'New Userapply Created', 
	  data: newUser });
  }
  return res.status(500).send({ message: ' Error in Inserting newUserApply.' });

});



module.exports = router