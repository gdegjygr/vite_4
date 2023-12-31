import { legacy_createStore as createStore, combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer
})

export const store = createStore(rootReducer)