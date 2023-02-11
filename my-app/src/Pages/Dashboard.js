import React from "react";
import { UserAuth } from "../Context/AuthContext";

function Dashboard() {
  const { user, logout } = UserAuth();
  const handleClick = () => {
    return logout();
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <h1>{user.email}</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Dashboard;
