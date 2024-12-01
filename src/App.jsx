import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getProducts from "./store/actions/productActions";

function App() {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [products, dispatch]);
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
