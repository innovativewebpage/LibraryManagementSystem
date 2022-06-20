import React,{useState,useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';



import {
BrowserRouter as Router,
Routes,
Route,
Link,
useParams

} from "react-router-dom";

//import { isUserLoggedIn, getInitialData } from './actions';


import PrivateOutlet from "./PrivateOutlet";
import UserSignIn from './UserSignIn';
import StudentFrontPage from './StudentFrontPage';




import './App.css';

function App() {
	
const dispatch = useDispatch();


	
	//componentDidMount or componentDidUpdate


  return (
  <Router>
    <div className="App">

	<Routes>
	  <Route path="/usersignin"  element={<UserSignIn/>}>Sign In
	  </Route>

	  
	   <>
	   
	  
	   
	   {/*<Route path="/dashboard"  element={<Dashboard/>}>
	   Dashboard
	  </Route>
	  
	   <Route path="/homepage"  element={<HomePage/>}>HomePage
	   </Route>*/}
	   
	   <Route path="/*" element={<PrivateOutlet/>}>
	    <Route path="userdashboard"  element={<StudentFrontPage/>} />
	   Dashboard
	  </Route>
	   
	   {/*<Route path="/*" element={<PrivateOutlet/>}>
		<Route path="dashboard" element={<Dashboard/>} />
	   </Route>*/
	   
	   
	   }
	  
	  
	  </>
	  
	  
		</Routes>
    </div>
	  </Router>
  );

}

export default App;
