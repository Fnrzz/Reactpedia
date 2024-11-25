import axios from "axios";
const addCart = (productId) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    dispatch({ type: "ADD_TO_CART", payload: res.data });
  };
};

const removeItemCart = (productId) => {
  return async (dispatch) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };
};

const addQuantityCart = (productId) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_QUANTITY", payload: productId });
  };
};

const removeQuantityCart = (productId) => {
  return async (dispatch) => {
    dispatch({ type: "REMOVE_QUANTITY", payload: productId });
  };
};

export { addCart, removeItemCart, removeQuantityCart, addQuantityCart };
