import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row,Col,Container,Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { getBooks,signout } from './actions';

import StudentDashboard from './StudentDashboard';
import StudentApply from './StudentApply';


import './App.css';

function StudentFrontPage() {
	
	var token = localStorage.getItem("token");
	
	console.log('StudentFrontPage_token',token)
	
	let navigate = useNavigate();
	
	
	//console.log('StudentFrontPage_token',token);
	
	const logout = () => {
    dispatch(signout());
	
	
  };
  
  useEffect(() => {
 
 	if(token)
		{
			navigate('../userdashboard');
		}	
		else
		{
			navigate('../usersignin');
		}	
	

 
 
  }, [token]);
	
	
	const dispatch = useDispatch();
	
	 useEffect(() => {
    dispatch(getBooks());
  }, []); 
	
  return (
    <div className="App">
			<h3>Student Dashboard</h3>

<Button variant="success" onClick={logout}>
                      Logout
        </Button>
			
	<div className="front">		
		<Container>
			<Row>
				<Col sm={6}><StudentDashboard/> </Col>
				<Col sm={6}><StudentApply/> </Col>
			</Row>
		</Container>
	</div>
			
    </div>
  );
}

export default StudentFrontPage;
