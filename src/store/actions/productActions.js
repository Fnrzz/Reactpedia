import axios from "axios";
const getProducts = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    const productWithQuantity = data.map((product) => {
      return {
        ...product,
        stock: 20,
      };
    });
    dispatch({ type: "GET_PRODUCTS", payload: productWithQuantity });
  };
};

export const decreaseStock = (item) => {
  return async (dispatch) => {
    dispatch({ type: "DECREASE_STOCK", payload: item });
  };
};

export default getProducts;
