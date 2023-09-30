import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import CheckoutPage from './pages/CheckoutPage';


  const router = createBrowserRouter(
    [
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/checkout",
        element: <CheckoutPage/>,
      },
  ]
  );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
       <RouterProvider router={router} />
    </ThemeProvider>
);

