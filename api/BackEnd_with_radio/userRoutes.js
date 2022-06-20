const express = require('express')
const router = express.Router();


const User = require('./userModel');



router.post('/create',async (req,res) => {

 const user = new User({	
	urollno : req.body.urollno,
    uname : req.body.uname,
	password:req.body.password,
	udept: req.body.udept,
	ucourse: req.body.ucourse,
    createdAt: Date.now()
  });
  
const newUser = await user.save();
  
  if (newUser) {
    return res
      .status(201)
      .send({ message: 'New User Inserted', 
	  data: newUser });
  }
  return res.status(500).send({ message: ' Error in Inserting User.' });

});


router.get("/read",async (req,res) => {
	var findData = await User.find();
res.json(findData);
})


router.delete('/:id', async (req, res) => {
  var deletedUser = await User.findById(req.params.id);
  if (deletedUser) {
     deletedUser = await deletedUser.remove();
   res.json( deletedUser );
  } else {
    res.send('Error in Deletion.');
  }
  
});



router.post('/signin', async (req, res) => { 
  const signinUser = await User.findOne({
    uname: req.body.uname
  });
 
 console.log(signinUser);
 if (signinUser) {
		const  {uname,password}	= signinUser;
	
			console.log('password==',password)
			
			console.log('req.body.password==',req.body.password)
	
		if(password == req.body.password)
		{
			console.log('ok')
			
		res.status(200).json({
					token:uname,
						user:signinUser
					});
		}		
		else
		{
			console.log('password error')	
		}	
	}
});


router.get("/signout",async (req,res) => {
	 res.status(200).json({
    message: "Signout successfully...!",
  });
	
	
})





module.exports = router