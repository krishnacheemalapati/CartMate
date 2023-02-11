import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import BulletPoint from "../Components/BulletPoint";
import cart from "../cartmate.png";

function Login() {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="signup-main">
      <div className="signup-info">
        <img className="" src={cart} width="125px" height="125px"></img>

        <BulletPoint
          header="Get started quickly"
          text="Make an account now and start shopping with your friends!"
        />

        <BulletPoint
          header="Find the best deals!"
          text="Cartmate helps you find good deals that you can't find anywhere else."
        />

        <BulletPoint
          header="Join thousands of users"
          text="Emerald is used by thousands of stores worldwide!"
        />
      </div>
      <div className="signup-container">
        <div className="title-account text-white">
          <h1>Sign in to your CartMate account</h1>
        </div>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div className="">
            <label className="my-2 text-white">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="email mb-4"
              type="email"
              placeholder=""
            ></input>
          </div>
          <div className="">
            <label className="my-2 text-white">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="password mb-4"
              type="password"
              placeholder=""
            ></input>
          </div>
          <button className="sign-up">Sign in</button>
        </form>
        <p className="already-have" style={{ color: "white" }}>
          Don't have an account?{" "}
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/register"
          >
            Sign up.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
