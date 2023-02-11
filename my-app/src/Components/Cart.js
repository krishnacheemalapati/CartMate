import React from "react";

function Cart({ name, id, users, items }) {
  return (
    <div className="text-white">
      <h2>{name}</h2>
      <h3>{id}</h3>
      <h3>{users.join(", ")}</h3>
      <h3>{items.join(", ")}</h3>
    </div>
  );
}

export default Cart;
