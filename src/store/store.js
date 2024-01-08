// Создаем store - то самое хранилище store. +store принимает только один reducer
import { legacy_createStore as createStore, combineReducers } from "redux";
import userReducer from "./userReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer
})

export const store = createStore(rootReducer)