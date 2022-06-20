import axios from "axios";

import { userConstants } from "../constants";



export const userApply = (user) => async (dispatch) => {
  try {   
 const {data} = await axios.post(`/app/data/create`, {
            ...user
        });
		
		//dispatch({ type: authConstants.CREATE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

