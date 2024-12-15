const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "DECREASE_STOCK":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, stock: product.stock - action.payload.quantity }
            : product
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
