import axios from "axios";
const login = async (username, password) => {
  try {
    const res = await axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password,
    });
    if (res.status === 200) {
      localStorage.setItem("access_token", res.data.token);
      return true;
    }
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return false;
  }
};

export default login;
