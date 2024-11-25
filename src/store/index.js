import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  cart: [],
  total: 0,
};

const calculateTotal = (cart) => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      let updatedCart;
      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      return {
        ...state,
        cart: updatedCart,
        total: calculateTotal(updatedCart),
      };
    }

    case "ADD_QUANTITY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
        total: calculateTotal(updatedCart),
      };
    }

    case "REMOVE_QUANTITY": {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
        total: calculateTotal(updatedCart),
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
        total: calculateTotal(updatedCart),
      };
    }

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
