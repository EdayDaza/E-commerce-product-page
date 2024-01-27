import { useState } from "react";
import { Header, MainContainer } from "./components/";
import { CartContext } from "./context/CartContext";

export const App = () => {
  const [productDetails, setProductDetails] = useState([]);

  const handleAddProduct = (product) => {
    setProductDetails([
      ...productDetails,
      product
    ]);
    
  };

  const handleDeleteProduct = (productId) => {  
    setProductDetails(productDetails.filter((product) => {  
      return product.id !== productId 
    }))
  }

  return (
    <CartContext.Provider value={{ productDetails, handleAddProduct, handleDeleteProduct}}>
      <Header />
      <MainContainer />
    </CartContext.Provider>
  );
};
