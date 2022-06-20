
import { authConstants } from "../constants";


export default function initialReducer(state = [], action) {
	
	switch (action.type) {
		
		
		case authConstants.INITIAL_SUCCESS:
		return action.payload;
		
		
		case authConstants.CREATE_SUCCESS:
		return [...state, action.payload.data];
		
		
		case authConstants.UPDATE_QTY:
		//return [...state, action.payload];
		return state.map((stat) => (stat.bname === action.payload.bname ? action.payload : stat));
	
	  
	  case authConstants.UPDATE_SUCCESS:	
	 return state.map((stat) => (stat._id === action.payload._id ? action.payload : stat));
	
	  
	  case authConstants.DELETE_SUCCESS:	
		return state.filter((stat) => stat._id !== action.payload._id);
		
	  
	  
	
   default:
		return state;

		}

}

