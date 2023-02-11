import React from "react";
import { useParams } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

function JoinCart() {
  const { user } = UserAuth();
  const { id } = useParams(); // id is the cart id

  const addUser = () => {
    // TODO: append current user ID to user list of cart
  };

  if (!user) {
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <h1>Please login</h1>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <h1>Join cart #{id}</h1>
      <Button onClick={addUser}>Join</Button>
    </div>
  );
}

export default JoinCart;
