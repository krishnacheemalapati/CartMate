import React from "react";
import { UserAuth } from "../Context/AuthContext";
import Button from "react-bootstrap/Button";

function Dashboard() {
  const { user, logout } = UserAuth();
  const handleClick = () => {
    return logout();
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <h1 className="text-white">{user.email}</h1>
      <Button onClick={handleClick}>Logout</Button>
    </div>
  );
}

export default Dashboard;
