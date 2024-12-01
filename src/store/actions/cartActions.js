const addCart = (product) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
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

const clearCart = () => {
  return async (dispatch) => {
    dispatch({ type: "CLEAR_CART" });
  };
};

export {
  addCart,
  removeItemCart,
  removeQuantityCart,
  addQuantityCart,
  clearCart,
};
