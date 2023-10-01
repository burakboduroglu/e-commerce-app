import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: (product) => {},
  increaseQuantity: (id) => {},
  decreaseQuantity: (id) => {},
  deleteItem: (id) => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const deleteItem = (id) => {
    const _cart = cart.filter((item) => {
      return item.id != id;
    });
    setCart(_cart);
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
  };

  const increaseQuantity = (id) => {
    const _cart = cart.map((item) => {
      if (item.id == id) {
        item.quantity++;
      }
      return item;
    });
    setCart(_cart);
  };

  const addToCart = (product) => {
    console.log("cart", cart);
    const isExist = cart.find((item) => item.id == product.id);
    console.log("isEXist", isExist);
    if (!isExist) {
      product.quantity = 1;
      setCart([...cart, product]);
    } else {
      let _cart = cart.map((item) => {
        if (item.id == product.id) {
          item.quantity++;
        }
        return item;
      });
      setCart(_cart);
    }
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
