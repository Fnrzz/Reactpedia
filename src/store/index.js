import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cart";
import productsReducer from "./reducers/products";

const reducer = combineReducers({
  cartReducer: cartReducer,
  productReducer: productsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
