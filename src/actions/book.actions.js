import axios from "axios";

import { authConstants } from "../constants";



export const getBooks = () => async (dispatch) => {
  try {
const {data}= await axios.get(`/app/data/read`);
//const res= await axios.get(`/app/data/read`);
	//console.log('res==',res)

   dispatch({ type: authConstants.INITIAL_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const addBooks = (books) => async (dispatch) => {
  try {   
 const {data} = await axios.post(`/app/data/create`, {
            ...books
        });
		
		dispatch({ type: authConstants.CREATE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateQty = (books) => async (dispatch) => {
	console.log('books',books);
try{
			var  {bname}=books;
			
			const {data} = await axios.put(`/app/data/upd_qty/${bname}`, {
            ...books
        });
		//console.log('data==',data)
		
	dispatch({ type: authConstants.UPDATE_QTY,payload: data });	
}	
	catch (error) {
    console.log(error.message);
  }

};


export const updateBook = (id,user) => async (dispatch) => {
	console.log(user,user)
	
  try {  
const {data} = await axios.put(`/app/data/${id}`, {
            ...user
        });
		
		console.log('data==',data);
		
   dispatch({ type: authConstants.UPDATE_SUCCESS,payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteProdcut = (id) => async (dispatch) => {
  try {
    const {data} = await axios.delete(`/app/data/${id}`);
	dispatch({ type:authConstants.DELETE_SUCCESS, payload: data });  
  } catch (error) {
   console.log(error.message);
  }
};





