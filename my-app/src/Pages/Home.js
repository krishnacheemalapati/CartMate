import React from "react";
import { UserAuth } from "../Context/AuthContext";
import { Link, Navigate } from "react-router-dom";

function Home() {
  const { user } = UserAuth();

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center gap-3 text-white">
      <div
        style={{ width: "456px" }}
        className="text-start d-flex flex-column gap-3"
      >
        <h1>Collaborate and Save with CartMate</h1>
        <p>
          Shop together, save together with a shared shopping cart app that
          makes group purchasing simple and efficient.
        </p>
        <Link to="/register">
          <button className="w-100 btn btn-primary">
            Sign up now for free
          </button>
        </Link>
      </div>

      <div
        style={{ height: "363px", width: "465px" }}
        className="bg-info"
      ></div>
    </div>
  );
}

export default Home;
