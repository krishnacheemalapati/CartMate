import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function JoinCart() {
  const { user } = UserAuth();
  const { id } = useParams(); // id is the cart id
  const [joined, setJoined] = useState(false);

  const addUser = () => {
    // TODO: append current user ID to user list of cart
    setJoined(true);
  };

  if (!user) {
    return (
      <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-white">Please login</h1>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-white">Join cart #{id}</h1>
      {!joined ? (
        <Button onClick={addUser}>Join</Button>
      ) : (
        <p className="text-white">Joined...</p>
      )}
    </div>
  );
}

export default JoinCart;
