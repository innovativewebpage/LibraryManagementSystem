import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteProdcut,updateBook } from './actions';

import { Row,Col,Container,Form,Modal } from "react-bootstrap";
import {Table,Button} from 'react-bootstrap';




function LibraryDashboard() {
	
	
	const initial = useSelector((state) => state.initial);
	const dispatch = useDispatch();
	
	
	const [bookDetails, setBookDetails] = useState(null);
	const [bookDetailModal, setBookDetailModal]=useState(false);
	
	
	
	const showBookDetailModal = (user) => {
		setBookDetails(user);
		setBookDetailModal(true);
	};
  
	const handleCloseBookDetailsModal = () => {
		setBookDetailModal(false);
	};
	
	
	 const submitUserForm = (e) => {
	 e.preventDefault();
 dispatch(updateBook(bookDetails._id, bookDetails));
 
 setBookDetails(null);
setBookDetailModal(false);


 } 
 
  
  
	
  return (
    <div className="App">
			<h3>Library Dashboard </h3>	

<Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Book Name</th>
            <th>Book Price</th>
            <th>Book Qty</th>
            <th>Author</th>
			<th>Edit</th>
			<th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {initial.length > 0
            ? initial.map((book,index) => (
                <tr key={book._id}>
                  <td>{index+1}</td>
                  <td>{book.bname}</td>
                  <td>{book.bprice}</td>
				   <td>{book.noofbooks}</td>
                  <td>{book.bauthor}</td>
				  <td><Button variant="success" onClick={() => showBookDetailModal(book)}>
                      Edit
        </Button></td>
				<td><Button variant="danger" onClick={() => dispatch(deleteProdcut(book._id))}>Delete</Button></td>
                </tr>
              ))
            : null}
        </tbody>
	</Table>
	
	
	
	<Modal show={bookDetailModal} 
	onHide={handleCloseBookDetailsModal}
	onSubmit={submitUserForm}
	>
	  
        <Modal.Header closeButton>
          <Modal.Title>Edit heading{bookDetails ? bookDetails._id:'' }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
		
		
		<Form>
  <Form.Group className="mb-3" >
    <Form.Label>Book Name</Form.Label>
    <Form.Control type="type" value={bookDetails ? bookDetails.bname:''}
	onChange={(e) => setBookDetails({ ...bookDetails, bname: e.target.value })}  
	/>
  </Form.Group>
  
   <Form.Group className="mb-3" >
    <Form.Label>Book Price</Form.Label>
    <Form.Control type="type" value={bookDetails ? bookDetails.bprice:''}
	onChange={(e) => setBookDetails({ ...bookDetails, bprice: e.target.value })}  
	/>
  </Form.Group>


	   <Form.Group className="mb-3" >
    <Form.Label>Available Qty</Form.Label>
    <Form.Control type="type" value={bookDetails ? bookDetails.noofbooks:''}
	onChange={(e) => setBookDetails({ ...bookDetails, noofbooks: e.target.value })}  
	/>
  </Form.Group>
  
  <Form.Group className="mb-3" >
    <Form.Label>Book Author</Form.Label>
    <Form.Control type="type" value={bookDetails ? bookDetails.bauthor:''}
	onChange={(e) => setBookDetails({ ...bookDetails, bauthor: e.target.value })}  
	/>
  </Form.Group>



  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
		
		</Modal.Body>
      </Modal>

			
    </div>
  );
}

export default LibraryDashboard;
