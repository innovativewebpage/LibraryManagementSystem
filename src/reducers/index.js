
import { combineReducers } from 'redux';
import  initialReducer from './initialReducers';
import  userReducer from './userReducers';


const reducer = combineReducers({
	initial:initialReducer,
	user:userReducer
	
});

export default reducer;
 


