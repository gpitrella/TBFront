import { 
    GET_ALL_INFO, 
    GET_INFO_LIST,
    ERROR_GET_DATA
} from '../actions/actiontype.js';

const initialState = {
    allData: [],
    infoList: [],
    errorData: {}
}

const homepageReducer = function(state = initialState, { type, payload }) {
    switch(type) {
        case GET_ALL_INFO:
            return {
                ...state,
                allData: payload
            }

        case GET_INFO_LIST:
            return {
                ...state,
                infoList: payload
            }

        case ERROR_GET_DATA:
            return {
                ...state,
                errorData: payload
            }
        default:
            return state;
        }
}

export default homepageReducer;