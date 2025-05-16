import React from "react";
import { router } from './App'
import { RouterProvider } from "react-router-dom";
import './index.css'
import ReactDOM from "react-dom/client";

import CartProvider from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>

)