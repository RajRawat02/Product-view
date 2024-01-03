import React, { createContext, useState } from "react";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id,event) => {
    const myCartItems = [...cartItems];
    const product = products.find((item) => item.id === id);
    const isAvailable = myCartItems.some((item) => item.id === id);

    if (isAvailable) {
      const product = myCartItems.find((item) => item.id === id);
      product.count += 1;
    } else {
      const newProduct = { ...product, count: 1 };
      myCartItems.push(newProduct);
    }
    setCartItems([...myCartItems]);
    event.stopPropagation();
  };

  const removeFromCart = (id) => {
    const myCartItems = [...cartItems];
    const product = myCartItems.find((item) => item.id === id);
    product.count -= 1;
    // if (product.count !== 0) {
    //   product.count -= 1;
    // } else {
    //   myCartItems = myCartItems.filter((product) => product.id !== id);
    // }
    setCartItems([...myCartItems]);
  };

  const deleteItemFromCart = (id) => {
    const filteredItem = cartItems.filter((product) => product.id !== id);
    setCartItems([...filteredItem]);
  };

  const initialState = {
    products,
    setProducts,
    cartItems,
    addToCart,
    removeFromCart,
    deleteItemFromCart
  };

  return (
    <ProductsContext.Provider value={initialState}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
