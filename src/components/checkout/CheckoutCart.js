import React, { useContext, useMemo } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { XMarkIcon } from "@heroicons/react/24/outline";
const CartItem = ({ product }) => {
  const { decreaseQuantity, increaseQuantity, deleteItem } =
    useContext(CartContext);

  return (
    <div className="flex border border-black pr-2 rounded-md overflow-none w-full h-12 border-slate-900 shadow-lg mb-3">
      <div className="w-16">
        <img
          className="w-full h-full object-cover"
          src={product.thumbnail}
          alt="thumbnail"
        />
      </div>
      <div className="flex flex-col  w-full px-4">
        <div className="w-full h-1/2 border-b border-black ">
          {product.title}
        </div>
        <div className="w-full font-bold h-1/2 flex justify-between ">
          <span>{product.price * product.quantity}</span>
          <div>
            <button
              onClick={() => {
                decreaseQuantity(product.id);
              }}
            >
              -
            </button>
            <span> {product.quantity} </span>
            <button
              onClick={() => {
                increaseQuantity(product.id);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className=" cursor-pointer  w-8 flex items-center justify-center">
        <XMarkIcon
          onClick={() => {
            deleteItem(product.id);
          }}
          className="text-red-500 text-[2rem] hover:scale-110 border-2 border-red-500 rounded-full transition-all"
        />
      </div>
    </div>
  );
};

export default function CheckoutCart({ onContinue }) {
  const { cart } = useContext(CartContext);

  const totalPrice = useMemo(() => {
    return cart.reduce((p, v) => {
      let price = v.price * v.quantity;
      return p + price;
    }, 0);
  }, [cart]);

  return (
    <div className="h-full">
      <div className="w-full mx-auto max-w-[700px] h-full scrollbar-thin scrollbar-thumb-[black] scrollbar-track-[white]  overflow-auto">
        {cart.map((item) => (
          <CartItem product={item} />
        ))}
      </div>
      <div className="w-full mx-auto max-w-[700px] gap-4 flex flex-col items-end justify-end px-4 font-bold text-lg mt-2">
        <p> Total Price : {totalPrice}$ </p>
        <button
          onClick={() => {
            onContinue();
          }}
          className="border shadow-xl transition-all hover:shadow-md  px-6 py-2 rounded-md border-black"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
