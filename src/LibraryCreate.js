import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBooks,updateQty } from './actions';
import { Row,Col,Container,Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';




function LibraryCreate() {

   const [bookId, setBookId] = useState('');			
   const [bname, setBname] = useState('');
   const [bprice, setBprice] = useState('');
   const [noOfBooks, setNoOfBooks] = useState('');
   const [bauthor, setAuthor] = useState('');
   
   const initial = useSelector((state) => state.initial);
	//console.log('Library Create initial==',initial);
const dispatch = useDispatch();

const createBooks = (e) => {
	e.preventDefault();	
	
	
		
	var find_bname = initial.find(x => x.bname === bname);
	console.log('find_bname',find_bname)
	//console.log('find_bname.length',find_bname.length)
		const books = {
					bookId,bname,bprice,noOfBooks,bauthor
			}	
	
	if(typeof find_bname !== 'undefined')
	{
			console.log('update')
	dispatch(updateQty(books));	
	}		
	else
	{
		console.log('insert')
	//console.log('books',books);
			
			dispatch(addBooks(books));
	}	
		
}	

	
  return (
    <div className="App">
			<h3>Library Create </h3>
			
			
			<Form onSubmit={createBooks} >
			
			
			<Form.Group className="mb-3" >  
				<Form.Label>Book Id</Form.Label>
				<Form.Control type="id" placeholder="Enter Book Id"
				value={bookId} onChange={(e) => setBookId(e.target.value)}

				/> 
			</Form.Group>
	
			<Form.Group className="mb-3" >  
				<Form.Label>Book Name</Form.Label>
				<Form.Control type="text" placeholder="Enter Book Name" 
				value={bname} onChange={(e) => setBname(e.target.value)} /> 
			</Form.Group>
  
  
    <Form.Group className="mb-3" >
    <Form.Label>Book Price</Form.Label>
    <Form.Control type="number" placeholder="Enter Book Price" 
	value={bprice} onChange={(e) => setBprice(e.target.value)} />
	
  </Form.Group>
  
  
  
    <Form.Group className="mb-3" >
    <Form.Label>No.of.Books</Form.Label>
    <Form.Control type="number" placeholder="Enter No.of Books"
	value={noOfBooks}  onChange={(e) => setNoOfBooks(e.target.value)}/>
  </Form.Group>
  
  
  
    <Form.Group className="mb-3" >
    <Form.Label>Author</Form.Label>
    <Form.Control type="text" placeholder="Enter Author" 
	value={bauthor} onChange={(e) => setAuthor(e.target.value)}
	/>
   </Form.Group>
   
     <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
     
				
    </div>
  );
}

export default LibraryCreate;
