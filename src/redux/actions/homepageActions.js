import axios from 'axios';
import { 
    GET_ALL_INFO, 
    GET_INFO_LIST,
    ERROR_GET_DATA,
    BASE_URL } from './actiontype';
    
// GET ALL INFO
export const getAllInfo = function (file) {
    return function (dispatch) {
        return axios.get(`${BASE_URL}/files/data${file ? `?file=${file}` : '/'}`)
            .then(data => dispatch({ type: GET_ALL_INFO, payload: data.data}))
            .catch(error => dispatch({ type: ERROR_GET_DATA, payload: error.response.data}))
    }   
};

// GET INFO LIST
export const getInfoList = function () {
    return function (dispatch) {
        return axios.get(`${BASE_URL}/files/list`)
            .then(data => dispatch({ type: GET_INFO_LIST, payload: data.data}))
            .catch(error => dispatch({ type: ERROR_GET_DATA, payload: error.response.data}))
    }   
};
