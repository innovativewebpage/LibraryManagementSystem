import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteProdcut,updateBook } from './actions';

import { Row,Col,Container,Form,Modal } from "react-bootstrap";
import {Table,Button} from 'react-bootstrap';




function StudentDashboard() {
	
	
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	
	console.log('user==',user)
	
	
	
	
	



	


  
  
	
  return (
    <div className="App">
			<h3>StudentDashboard </h3>	


	<Table striped bordered hover size="sm">
      
          <tr>
            <th>Sno</th>
			<td> 1</td>
		</tr>	
			
			<tr>
            <th>Roll No</th>
			<td> {user ? user.urollno :''}</td>
			</tr>
			
			<tr>
            <th>User Name</th>
			<td> {user ? user.uname :''}</td>
			</tr>
			
			<tr>
            <th>User Dept</th>
			<td> {user ? user.udept :''}</td>
			</tr>
			
			<tr>
            <th>User Course</th>
			<td> {user ? user.ucourse :''}</td>
			</tr>
			
			
	
  
	</Table>
	
	

			
    </div>
  );
}

export default StudentDashboard;
