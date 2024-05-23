import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem, removeFromCart, selectCartItems } from "./cartSlice";

export function Cart() {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => dispatch(incrementItem({ id: item.id }))}>+</button>
            <button onClick={() => dispatch(decrementItem({ id: item.id }))}>-</button>
            <button onClick={() => dispatch(removeFromCart({ id: item.id }))}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
    </div>
  );
}