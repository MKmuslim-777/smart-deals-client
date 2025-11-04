import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Components/Home/Home";
import AllProducts from "../Components/AllProducts/AllProducts";
import AuthLayouts from "../Layouts/Authentication/AuthLayouts";
import Login from "../Layouts/Authentication/Login";
import Register from "../Layouts/Authentication/Register";
import MyProducts from "../MyProDucts/MyProducts";
import MyBids from "../MyBids/MyBids";
import PrivetRouter from "../Context/PrivetRouter";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allProducts",
        Component: AllProducts,
      },
      {
        path: "/myProducts",
        element: (
          <PrivetRouter>
            <MyProducts></MyProducts>
          </PrivetRouter>
        ),
      },
      {
        path: "/myBids",
        element: (
          <PrivetRouter>
            <MyBids></MyBids>
          </PrivetRouter>
        ),
      },
      {
        path: "productDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        element: (
          <PrivetRouter>
            <ProductDetails></ProductDetails>
          </PrivetRouter>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
