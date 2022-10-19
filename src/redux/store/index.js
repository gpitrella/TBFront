import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from '../reducer/homepageReducer.js';


const reducer = {
    homepageReducer: homepageReducer,
}

export const store = configureStore({
    reducer
});

export default store;