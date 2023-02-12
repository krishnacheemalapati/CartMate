import React from "react";
import Cart from "./Cart";

function CartList() {
  return (
    <Cart
      name="John's Birthday"
      id="12345"
      users={["Bob", "Jane"]}
      items={["Speaker"]}
    />
  );
}

export default CartList;
