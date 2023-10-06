import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import Page404 from "./pages/Page404"
import { CartContextProvider } from "./contexts/CartContext";
import Detail from "./pages/Detail";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CategoryPage from "./pages/CategoryPage";
import Category from "./components/Category";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/category/:categoryName",
    element: <CategoryPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "*",
    element: <Page404 />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
    <ToastContainer />
  </ThemeProvider>
);
