import axios from "axios";
import { 
      GET_ROOMS_FAILURE, 
      GET_ROOMS_REQUEST,
      GET_ROOMS_SUCCESS} from "./actionTypes";

export const getRoomsRequest =()=>{
    return{
        type: GET_ROOMS_REQUEST
    }
}
export const getRoomsSuccess = (payload)=>{
    return{
        type:GET_ROOMS_SUCCESS,
        payload
    };
};

export const getRoomsFailure =(error)=>{
    return {
        type:GET_ROOMS_FAILURE,
        payload: error
    }
}

export const getRooms =() =>(dispatch)=>{
    dispatch(getRoomsRequest());
    return axios.get("http://localhost:3001/rooms")
    .then(res=>{
        dispatch(getRoomsSuccess(res.data))
    }).catch((err)=>{
        dispatch(getRoomsFailure(err))
    })
}