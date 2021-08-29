import axios from "axios";
import { 
      GET_ROOMS_FAILURE, 
      GET_ROOMS_REQUEST,
      GET_ROOMS_SUCCESS,
      SET_ISOPEN,
    GET_FILTER_ROOM,
    Get_BOOKING_DETAILS} from "./actionTypes";

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

export const setIsOpen = (payload) => {
    return {
        type: SET_ISOPEN,
        payload:payload
    }
}
export const getBookingDetails = (payload) => {
    return {
        type: Get_BOOKING_DETAILS,
        payload:payload
    }
}


export const getFilterRoom = (payload) => {
    return {
        type: GET_FILTER_ROOM,
        payload
    }
}