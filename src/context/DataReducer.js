import { GET_DATA, POST_DATA, PUT_DATA } from "./types";

export default function (state, action) {
    const {payload, type} = action;

    switch(type) {
        case GET_DATA: 
            return {
                ...state,
                data: payload,
            }
            case POST_DATA: 
            return {
                ...state,
                data: [...state.data, state.data[payload.index] = payload.editedData],
            }
            case PUT_DATA: 
            return {
                
                ...state,
                data: [...state.data, payload],
            }
            default:
                return state;
    }
}