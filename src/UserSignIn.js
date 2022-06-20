import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './actions';

import { Row,Col,Container,Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './App.css';



function SignIn() {
	
	 let navigate = useNavigate();
	/*const auth = useSelector((state) => state.auth);
	console.log('signin=',auth);
	

if (auth.authenticate) {
    navigate('../dashboard');
  }
  
*/
const user = useSelector((state) => state.user);
console.log('UserSignIn==',user)
console.log('user.name==',user.uname)



useEffect(() => {
   if(user.uname)
{
navigate('../userdashboard');	
}
  }, [user.uname]);

	

	
	 const [uname, setUname] = useState('');
   const [password, setPassword] = useState('');
   
   
  
	 
	  const dispatch = useDispatch();
	  
	  const signinSubmit = (e) => {
		  e.preventDefault();
		  
		  const user = {
            uname, password
			}
		dispatch(login(user));
		  
	  }
	  


	
  return (
    <div className="App">	
	<Container>
		<Row>
			<Col md={{ span: 6, offset: 3 }}>
	
	<Form onSubmit={signinSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" 	placeholder="Enter uname" 
onChange={(e) => setUname(e.target.value)}
	
/>
   
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"
	onChange={(e) => setPassword(e.target.value)}
	/>
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
     
	
	</Col>
  </Row>
</Container>
	
	

    </div>
  );
}

export default SignIn;
