import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

import { CartIcon, MinusIcon, PlusIcon } from "./Icons";
import initialProduct from "../data/products.json";


export const ProductDetails = () => {
  const [product] = useState(initialProduct);
  const [productCounter, setProductCounter] = useState(1);
  const {handleAddProduct} = useContext(CartContext)

  const handleDecrement = () => {
    if (productCounter > 0) setProductCounter(productCounter - 1);
  };

  const handleIncrement = () => {
    setProductCounter(productCounter + 1);
  };

  const totalPrice = (product.price * product.discount).toFixed(2);
  
  return (
    <div className="grid max-w-[470px] gap-4 p-6">
      <p className="text-[0.625rem] font-bold uppercase tracking-widest text-clr-orange">{product.company}</p>
      <h2 className="text-xl font-bold text-clr-black md:text-4xl">{product.title}</h2>
      <p>{product.description}</p>

      <div className="flex items-center justify-between md:flex-col md:items-start md:gap-2">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-clr-black md:text-2xl">
            ${totalPrice}
          </span>
          <span className="rounded-md bg-clr-pale-orange px-2 py-1 text-xs font-bold text-clr-orange">
            {product.discount * 100}%
            </span>
        </div>
        <span className="text-xs font-bold text-clr-grayish-blue line-through md:text-sm">
          ${product.price.toFixed(2)}
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_2fr]">
        <div className="flex items-center justify-between gap-4 rounded-lg bg-clr-light-grayish-blue px-4 py-3">
          <button onClick={handleDecrement}>
            <MinusIcon className="text-clr-orange" />
          </button>
          <span className="font-bold text-clr-black">{productCounter}</span>
          <button onClick={handleIncrement}>
            <PlusIcon className="text-clr-orange" />
          </button>
        </div>
        <button 
          className="flex items-center justify-center gap-2 rounded-lg bg-clr-orange px-4 py-3 text-clr-white shadow-2xl shadow-clr-orange hover:opacity-75 disabled:opacity-50"
          disabled={productCounter < 1}
          onClick={() => handleAddProduct({
            id: product.id++,
            image: product.images.small_size[0],
            title: product.title,
            price: totalPrice, 
            units: productCounter   
          })}
        >
          <CartIcon className="fill-clr-white" />
          Add to car
        </button>
      </div>
    </div>
  );
};
