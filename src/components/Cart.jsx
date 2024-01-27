import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { DeleteIcon } from "./index";
import PropTypes from "prop-types";

export const Cart = () => {
  const { productDetails, handleDeleteProduct } = useContext(CartContext);

  return (
    <div className="absolute inset-x-0 top-[125%] z-10 m-auto w-[360px] rounded-lg bg-clr-white shadow-2xl md:left-auto md:right-0 md:top-full">
      <div className="p-6">
        <h3 className="text-sm font-bold text-clr-black">Cart</h3>
      </div>

      <hr />

      <div className="grid min-h-[188px] place-content-center gap-6 p-6">
        {productDetails.length === 0 && <p>Your cart is empty</p>}

        {productDetails.map((product) => {
          return (
            <div
              key={product.id}
              className="flex items-center justify-between gap-4"
            >
              <img src={product.image} alt="" className="w-12 rounded" />
              <div>
                <p className="text-base">{product.title}</p>
                <span className="text-base">
                  ${product.price} x {product.units}{" "}
                  <strong className="text-clr-black">
                    ${(product.price * product.units).toFixed(2)}
                  </strong>
                </span>
              </div>
              <button
                onClick={() => {  
                  handleDeleteProduct(product.id)
                }}
              >
                <DeleteIcon />
              </button>
            </div>
          );
        })}

        {productDetails.length !== 0 && (
          <button className="w-full rounded-lg bg-clr-orange py-5 font-bold text-clr-white">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  isActiveModal: PropTypes.bool,
};
