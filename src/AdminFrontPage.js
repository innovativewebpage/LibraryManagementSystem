import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row,Col,Container,Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { getBooks } from './actions';

import LibraryDashboard from './LibraryDashboard';
import LibraryCreate from './LibraryCreate';


import './App.css';

function AdminFrontPage() {
	
	
	
	const dispatch = useDispatch();
	
	 useEffect(() => {
    dispatch(getBooks());
  }, []); 
	
  return (
    <div className="App">
			<h3>Admin Dashboard</h3>
			
			
	<div className="front">		
		<Container>
			<Row>
				<Col sm={6}><LibraryDashboard/> </Col>
				<Col sm={6}><LibraryCreate/> </Col>
			</Row>
		</Container>
	</div>
			
    </div>
  );
}

export default AdminFrontPage;
