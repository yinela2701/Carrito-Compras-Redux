import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 15 },
  // add more products as needed
];

export function ShoppingSection() {
  const dispatch = useDispatch();

  return (
    <div className="shopping-section">
      <h2>Shopping Section</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button
              onClick={() =>
                dispatch(addToCart({ id: product.id, name: product.name, price: product.price }))
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}