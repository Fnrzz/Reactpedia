import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cart";

const reducer = combineReducers({
  cartReducer: cartReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
