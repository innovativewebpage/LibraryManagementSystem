import axios from "axios";

import { userConstants } from "../constants";



export const login = (user) => async (dispatch) => {
	
	  const res = await axios.post(`/app/user/signin`, {
            ...user
        });
		//console.log('res=',res)		
		if(res.status === 200){
		const { token, user } = res.data;

		localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
		
		
		 dispatch({
                type: userConstants.USER_LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
		
		}	
}



export const signout = () => async (dispatch) => {
  try {
const {data}= await axios.get(`/app/user/signout`);

		localStorage.clear();
	dispatch({ type: userConstants.USER_LOGOUT_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


 