import { Navbar, Cart } from "./index";
import { CartIcon, CloseIcon, LogoIcon, MenuIcon } from "./Icons";

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export const Header = () => {
  const { productDetails } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  const [isActiveModal, setIsActiveModal] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      className={`relative ${
        isActive &&
        "z-10 before:fixed before:inset-0 before:bg-clr-very-dark-blue before:opacity-80 before:content-['']"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-16 p-6 md:p-0">
          <div className="flex items-center gap-4">
            <button className="z-10 md:hidden" onClick={handleClick}>
              {isActive ? <CloseIcon /> : <MenuIcon />}
            </button>

            <LogoIcon />
          </div>

          <Navbar isActive={isActive} />

          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <CartIcon
                onClick={() => {
                  setIsActiveModal(!isActiveModal);
                }}
              />
              {productDetails.length > 0 && (
                <span className="absolute -right-2 -top-1 grid h-3 w-5 place-content-center rounded-lg bg-clr-orange text-[8px] font-bold text-clr-white">
                  {productDetails.length}
                </span>
              )}
            </div>
            <img
              src="/image-avatar.png"
              alt="imageAvatar"
              className="w-6 cursor-pointer rounded-full border-2 border-transparent hover:border-clr-orange md:w-12"
            />
          </div>
          {isActiveModal && <Cart />}
        </div>
        <div className="md:h-[1px] md:w-full md:bg-clr-dark-grayish-blue md:opacity-70"></div>
      </div>
    </header>
  );
};
