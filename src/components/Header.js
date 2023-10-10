import React, { useState } from "react";
import { FaShopify } from "react-icons/fa";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li> Про нас</li>
          <li> Контакти</li>
          <li> Кабінет</li>
        </ul>
        <FaShopify
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            <h3>111</h3>
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
