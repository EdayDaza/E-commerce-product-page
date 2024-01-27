import PropTypes from "prop-types";
import { useState } from "react";
import { CloseIcon, NextIcon, PrevIcon } from "./Icons";
import product from "../data/products.json"


export const ProductSlider = ({ openModalOnClick, closeModalOnEscape, isActiveImage, ...props}) => {
  const [index, setIndex] = useState(0);

  const handleClickPrev = () => {
    (index === 0) ? setIndex(product.images.original_size.length - 1) : setIndex(index - 1)
  };

  const handleClickNext = () => {
    (index === product.images.original_size.length - 1) ? setIndex(0) : setIndex(index + 1)
  };

  return (
    <div {...props}>
      {isActiveImage && (
        <CloseIcon
          className="fill-clr-white z-10 cursor-pointer mb-4 ml-auto"
          onClick={closeModalOnEscape}
        />
      )}
      <div className="grid grid-cols-4 gap-8 max-w-[445px] z-[9]">
        <div className="relative col-span-4">
          <img
            src={product.images.original_size[index]}
            alt="imagesProductSlider"
            className="pointer-events-none md:rounded-2xl md:cursor-pointer md:pointer-events-auto"
            onClick={openModalOnClick}
          />

          <div
            className={`absolute inset-0 inset-x-4 flex items-center justify-between 
            ${isActiveImage ? "md:flex md:-inset-x-[22px]" : "md:hidden"}`}
          >
            <button
              className="bg-clr-white rounded-full w-10 aspect-square grid place-content-center"
              onClick={handleClickPrev}
            >
              <PrevIcon />
            </button>
            <button
              className="bg-clr-white rounded-full w-10 aspect-square grid place-content-center"
              onClick={handleClickNext}
            >
              <NextIcon />
            </button>
          </div>
        </div>

        {product.images.small_size.map((smallImage, i) => {
          return (
            <div 
              className={`hidden md:block md:rounded-xl md:overflow-hidden md:cursor-pointer bg-clr-white 
              ${i === index && "md:border-2 md:border-clr-orange"}`}
              key={i}
            >
              <img
                className={`md:hover:opacity-50 ${i === index && "md:opacity-50"}`}
                src={smallImage}
                alt={smallImage}
                onClick={() => {
                  setIndex(i)
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

ProductSlider.propTypes = {
  openModalOnClick: PropTypes.func,
  closeModalOnEscape: PropTypes.func,
  isActiveImage: PropTypes.bool,
};
