import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const products = [
  { id: 1, name: "Producto A", price: 1000 },
  { id: 2, name: "Producto B", price: 2000 },
  { id: 3, name: "Producto C", price: 1500 },
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