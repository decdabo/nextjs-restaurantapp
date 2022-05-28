import React from "react";
import toast from "react-hot-toast";
import { deleteItemFromCart } from "../../context/actions/cartActions";

export const CartItem = ({item, dispatch, index }) => {
  const { title, price, food } = item;

  const handleDeleteCartItem = () => {
    dispatch(deleteItemFromCart(price, index))
    toast.success('Borrado del carrito')
  }

  return (
    <li>
      <button onClick={handleDeleteCartItem} >❌</button>
      <h2> { food }: { title }</h2>
      <h3>Price:</h3>
      <h1> { price } usd</h1>
    </li>
  );
};
