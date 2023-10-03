import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import { CartContextProvider } from "./contexts/CartContext";
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
