import { configureStore } from "@reduxjs/toolkit";
import Cart from "../reducer/Cart";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const config = {
    key :  "root",
    storage

}
const allReducers = combineReducers({
    cart : Cart,


})

const reducers = persistReducer(config, allReducers)

const store = configureStore({
    reducer :reducers

})



export default store