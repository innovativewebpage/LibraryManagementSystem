const express = require('express')
const router = express.Router();


const Product = require('./productModel');



router.post('/create',async (req,res) => {
	
	
	//var product = new Product();
	//product.bname = req.body.bname;
	//product.noofbooks = req.body.noOfBooks;
	
	//var findData = await Product.find({bname:req.body.bname});
	//console.log('findData==',findData)
	    //const [Sc]=  findData;
		
		//console.log('sc==',Sc)
	
	
//const [math] = findData;
//const [{bname:Maths}] = findData;
//const [{bname}] = findData;
	//const test = req.body.noOfBooks;
	//console.log('test==',test)
	//console.log('findData.length==',findData.length)
	
/*if(findData.length > 0)
{
	const [{bname,noofbooks}] = findData;
console.log('bname==',bname);
console.log('noofbooks==',noofbooks);
*/
//console.log('{product.noofbooks}==',{product.noofbooks});
  //const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
/*let doc = await Product.findOneAndUpdate(bname,
{$inc: {noofbooks: test}} 
,{
  new: true
});*/
//console.log('doc',doc)
/*if (doc) {
    return res
      .status(201)
      .send({ message: 'Qty updated', 
	  data: doc });
  }
  return res.status(500).send({ message: ' Error in Inserting Book.' });

}
*/
//const [{bname:Maths}] = findData;
//console.log('Maths==',Maths)

/*let doc = await Product.findOneAndUpdate(Maths, 
{ noofbooks:noofbooks + product.noofbooks }, {
  new: true
});

console.log('doc',doc)*/

	
	
	
	//console.log('bname==',bname)
	
	/*const myInfo = findData.map((item) => {
		const {bname} = item;
		console.log(bname)


})*/

//console.log('itemval1',itemval1)

			
			
	
	/*product.noofbooks = req.body.noOfBooks;

let doc = await Product.findOneAndUpdate(product.bname, 
{ noofbooks:noofbooks + product.noofbooks }, {
  new: true
});

console.log('doc',doc)*/

	
	//var product = req.body.bname;
	
	//console.log('product==',{product})
	
	
//var findData = await Product.find({bname: req.body.bname});

//console.log('findData===',findData[0].bname)


/*
let doc = await Product.findOneAndUpdate(findData[0].bname, 
{ noofbooks: findData[0].noofbooks + 4 }, {
  new: true
});

console.log('doc',doc)
*/
/*if(findData)
{
  findData = await Product.findByIdAndUpdate({_bname: req.body.bname}, { noofbooks: findData.noofbooks + 1 }, { new: true });
   	
}	

console.log('findData==',findData)*/
	


 const product = new Product({	
	book_id : req.body.bookId,
    bname : req.body.bname,
	bprice: req.body.bprice,
	noofbooks: req.body.noOfBooks,
    bauthor: req.body.bauthor
  });
  
const newProduct = await product.save();
  
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Book Inserted', 
	  data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Inserting Book.' });

});

router.put("/upd_qty/:id",  async (req, res) => {
	//console.log(req.params.id);
let updateQty = await Product.findOne({bname:req.params.id});
console.log('req.body.noOfBooks',req.body.noOfBooks);
console.log('updateQty',updateQty);	
	
updateQty1 = await Product.findByIdAndUpdate(updateQty._id, 
 {$inc: {noofbooks :  req.body.noOfBooks}} , { new: true });
   
	res.json(updateQty1);
	console.log('updateQty1',updateQty1);
})


router.get("/read",async (req,res) => {
	var findData = await Product.find();
res.json(findData);
})


router.put("/:id",  async (req, res) => {
	
	console.log('req.body==',req.body);
	
	 try {
	 
    let updateBook = await Product.findById(req.params.id);
		//console.log('updateBook==',updateBook)
	
    const data = {
    book_id : req.body.book_id,
    bname : req.body.bname,
	bprice: req.body.bprice,
	noofbooks: req.body.noofbooks,
    bauthor: req.body.bauthor
    };
	//console.log('data==',data)
	
    updateBook = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(updateBook);
  } catch (err) {
    console.log(err);
  }
	
  
});


/*
/*
router.get("/:id", async (req, res) => {
  try {
    // Find user by id
    let editProduct = await Product.findById(req.params.id);
    res.json(editProduct);
  } catch (err) {
    console.log(err);
  }
});


router.put("/:id",  async (req, res) => {
	
	
  try {
	  //console.log(req.params.id);
    let updateProduct = await Product.findById(req.params.id);
		
	
    const data = {
      name: req.body.name ,
	  brand:req.body.brand,
	  price:req.body.price,
	  countInStock:req.body.countInStock,
	  description:req.body.description,
	  gender:req.body.gender,
	  level: req.body.level,
	  checktest:req.body.checktest
    };
    updateProduct = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(updateProduct);
  } catch (err) {
    console.log(err);
  }
});

*/

router.delete('/:id', async (req, res) => {
	
	
  var deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
     deletedProduct = await deletedProduct.remove();
   res.json( deletedProduct );
  } else {
    res.send('Error in Deletion.');
  }
  
});



module.exports = router