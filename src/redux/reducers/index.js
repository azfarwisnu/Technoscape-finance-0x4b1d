import { combineReducers } from 'redux';
import userReducer from "./fullData";

export default combineReducers({
    user: userReducer,
});