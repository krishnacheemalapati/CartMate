import React from "react";
import { UserAuth } from "../Context/AuthContext";
import Button from "react-bootstrap/Button";
import CartList from "../Components/CartList";

function Dashboard() {
  const { user, logout } = UserAuth();
  const handleClick = () => {
    return logout();
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <CartList />
    </div>
  );
}

export default Dashboard;
