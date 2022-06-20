import React from 'react';
import { Row,Col,Container,Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import './App.css';

function FrontPage() {
  return (
    <div className="App">
			<h3>Library Management System</h3>
			
			
	<div className="front">		
		<Container>
			<Row>
				<Col sm={6}><h3><Button>User</Button></h3></Col>
				<Col sm={6}><h3><Button>Admin</Button></h3></Col>
			</Row>
		</Container>
	</div>
			
    </div>
  );
}

export default FrontPage;
