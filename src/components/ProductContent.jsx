import { ProductDetails, ProductSlider } from "./index";
import { useState } from "react";

export const ProductContent = () => {
  const [isActiveImage, setIsActiveImage] = useState(false);

  const openModalOnClick = () => {
    setIsActiveImage(!isActiveImage);
  };

  const closeModalOnEscape = () => {
    setIsActiveImage(!isActiveImage);
  };

  return (
    <section className="md:py-20">
      <div className="container mx-auto">
        <div className="grid place-items-center md:mx-auto md:max-w-5xl md:auto-cols-fr md:grid-flow-col md:items-center">
          <ProductSlider openModalOnClick={openModalOnClick} />

          {isActiveImage && (
            <ProductSlider
              className="fixed left-0 top-0 grid min-h-screen w-full place-content-center before:fixed before:inset-0 before:bg-clr-very-dark-blue before:opacity-75 before:content-['']"
              closeModalOnEscape={closeModalOnEscape}
              isActiveImage={isActiveImage}
            />
          )}

          <ProductDetails />
        </div>
      </div>
    </section>
  );
};
