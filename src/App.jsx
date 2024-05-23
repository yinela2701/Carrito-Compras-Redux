import React from "react";
import { ShoppingSection } from "./feature/cart/shoppingSection";
import { Cart } from "./feature/cart/cart";
import "./App.css"; // Ensure this path is correct

function App() {
   return (
      <div className="App">
         <div className="left">
            <Cart />
         </div>
         <div className="right">
            <ShoppingSection />
         </div>
      </div>
   );
}

export default App;