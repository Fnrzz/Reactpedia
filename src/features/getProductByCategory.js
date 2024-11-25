import axios from "axios";
const fetchProducts = async (category) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return data;
};

export default fetchProducts;
