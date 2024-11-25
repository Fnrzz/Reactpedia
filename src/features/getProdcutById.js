import axios from "axios";
const fetchProductById = async (id) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

export default fetchProductById;
