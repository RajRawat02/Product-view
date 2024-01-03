import React, { useContext } from "react";
import { ProductsContext } from "./ProductContext";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteItemFromCart
  } = useContext(ProductsContext);

  // Total cart value
  const calculateCartValue = (products) => {
    let totalCartValue;
    if (products.length) {
      totalCartValue = cartItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    } else {
      totalCartValue = 0;
    }
    return totalCartValue;
  };

  // Total cart items
  const totalCartItemsCount = (products) => {
    let totalCartValue;
    if (products.length) {
      totalCartValue = cartItems.reduce((acc, item) => acc + item.count, 0);
    } else {
      totalCartValue = 0;
    }
    return totalCartValue;
  };

  return (
    <>
    <p>Cart Items : {totalCartItemsCount(cartItems)}</p>
    <p>Total Cart Value : {calculateCartValue(cartItems)}</p>
    <ul>
      {cartItems &&
        cartItems.map(({ id, name, price, image, count }) => {
          if (count !== 0) {
            return (
              <li key={id} className="cart">
                <h4>{name}</h4>
                <p>{price}</p>
                <img src={image} alt={name} width={100} height={100}/>
                <button onClick={(event) => addToCart(id,event)}>+</button>
                <button onClick={() => removeFromCart(id)}>-</button>
                <button onClick={() => deleteItemFromCart(id)}>Remove</button>
              </li>
            );
          }
          return null;
        })}
    </ul>
    </>
  );
};
export default Cart;
