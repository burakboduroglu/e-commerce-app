import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import { CartContextProvider } from "./contexts/CartContext";
import Detail from "./pages/Detail";
import SingInPage from "./pages/SingInPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/product/:productId",
    element: <Detail />,
  },
  {
    path:"/signin",
    element:<SingInPage/>,
  },
  {
    path:"/signup",
    element:<SignUpPage/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </ThemeProvider>
);
