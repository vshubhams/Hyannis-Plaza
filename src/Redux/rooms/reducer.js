import {
    GET_ROOMS_REQUEST,
    GET_ROOMS_SUCCESS,
    GET_ROOMS_FAILURE,
    SET_ISOPEN,
    GET_FILTER_ROOM,
    Get_BOOKING_DETAILS
} from "./actionTypes"

const initState ={
    rooms: [],
    isLoading:false,
    isError: false,
    modal: { isOpen: false, id: "" },
    filterRoom: [],
    bookingDetails:{}
};

const roomsReducer = (state = initState, {type,payload})=>{
    
    switch(type){
        case GET_ROOMS_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            };
        case GET_ROOMS_SUCCESS:
            return {
                ...state,
                rooms:payload,
                isLoading:false
            }
        case GET_ROOMS_FAILURE:
            return {
                ...state,
                isError:true
            }
        case SET_ISOPEN:
            return {
                ...state,
                modal: {id:payload.id,isOpen:payload.isOpen}
            }
        case Get_BOOKING_DETAILS:
            return {
                ...state,
                bookingDetails:payload
            }
        case GET_FILTER_ROOM:
            return {
                ...state,
                filterRoom: payload
            }
        default:
            return state;
    }
};

export {roomsReducer};