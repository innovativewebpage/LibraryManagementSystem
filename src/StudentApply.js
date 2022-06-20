import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteProdcut,updateBook,userApply } from './actions';

import { Row,Col,Container,Form,Modal } from "react-bootstrap";
import {Table,Button} from 'react-bootstrap';




function StudentApply() {
	
	
	const initial = useSelector((state) => state.initial);
	const dispatch = useDispatch();
	
	
	

	const userApplyBook = (user) => {
		user.qty = 1;
		dispatch(userApply(user));
	};
	
	
  
	


	


  
  
	
  return (
    <div className="App">
			<h3>StudentApply </h3>	
			
			<Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Book Name</th>
            <th>Book Price</th>
            <th>Book Qty</th>
            <th>Author</th>
		
		
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
				
<td><Button variant="success" onClick={() => userApplyBook(book)}>
                      Apply
        </Button></td>
		

				
			
			   </tr>
              ))
            : null}
        </tbody>
	</Table>
	
	


	
			
    </div>
  );
}

export default StudentApply;
