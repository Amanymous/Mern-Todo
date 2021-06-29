import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  noteCreateReducer,
  noteDeleteReducer,
  noteListReducer,
  noteUpdateReducer,
} from "./reducers/notesReducers";

import {  userLoginReducer,
    userRegisterReducer,
    userUpdateReducer, } from './reducers/ userReducers'

const reducer = combineReducers({
    noteList: noteListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    noteCreate: noteCreateReducer,
    noteDelete: noteDeleteReducer,
    noteUpdate: noteUpdateReducer,
    userUpdate: userUpdateReducer,
  });
 
// use store.subscribe() to efficiently persist some of the app's state to localStorage

  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

// initialState is populated using preloadedState will still need to provide a default value 
  const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
  };
// Redux Thunk middleware allows you to write action creators
  const middleware = [thunk];
  
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
// composeWithDevTools power-up Redux development workflow

// store brings together the state, actions, and reducers that make up your app
export default store;
  