import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/women",
          element: <Women />,
        },
        {
          path: "/electronics",
          element: <Electronics />,
        },
        {
          path: "/jewelery",
          element: <Jewelery />,
        },
        {
          path: "/product/:id",
          element: <DetailProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
          loader: () => {
            if (!localStorage.getItem("access_token")) {
              return redirect("/");
            }
            return null;
          },
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
