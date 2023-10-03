import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext({
  cart: [],
  addToCart: (product) => {},
  increaseQuantity: (id) => {},
  decreaseQuantity: (id) => {},
  deleteItem: (id) => {},
});

const getPersisted = () => {
  let persisted = localStorage.getItem("persisted");
  if (persisted) return JSON.parse(persisted);
  else {
    localStorage.setItem("persisted", JSON.stringify([]));
    return [];
  }
};

const syncLocalStorage = (state) => {
  localStorage.setItem("persisted", JSON.stringify(state));
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(getPersisted());

  const deleteItem = (id) => {
    const _cart = cart.filter((item) => {
      return item.id != id;
    });
    setCart(_cart);
    syncLocalStorage(_cart);
    toast.warn("Product deleted from the cart successfully");
  };

  const decreaseQuantity = (id) => {
    let _cart = cart.map((item) => {
      if (item.id == id) {
        if (item.quantity - 1 == 0) {
          return undefined;
        } else item.quantity--;
      }
      return item;
    });

    _cart = _cart.filter((item) => typeof item != "undefined");

    setCart(_cart);
    syncLocalStorage(_cart);
  };

  const increaseQuantity = (id) => {
    const _cart = cart.map((item) => {
      if (item.id == id) {
        item.quantity++;
      }
      return item;
    });
    setCart(_cart);
    syncLocalStorage(_cart);
  };

  const addToCart = (product) => {
    console.log("cart", cart);
    const isExist = cart.find((item) => item.id == product.id);
    console.log("isEXist", isExist);
    if (!isExist) {
      product.quantity = 1;
      setCart([...cart, product]);
      syncLocalStorage([...cart, product]);
    } else {
      let _cart = cart.map((item) => {
        if (item.id == product.id) {
          item.quantity++;
        }
        return item;
      });
      setCart(_cart);
      syncLocalStorage(_cart);
    }
    toast.success("Product added to cart successfully !");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
