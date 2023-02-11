import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import BulletPoint from "../Components/BulletPoint";
import { AiFillCheckCircle } from "react-icons/ai";
import cart from "../cartmate.png";

import { UserAuth } from "../Context/AuthContext";

// import { doc, setDoc, addDoc, collection } from "firebase/firestore"
// import { db } from "../firebase"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  //const users = collection(db, 'users')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credential = await createUser(email, password);
    navigate("/");
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
          <h1>Create your CartMate account</h1>
        </div>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div className="">
            <label className="my-2 text-white">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="username mb-4"
              type="text"
              placeholder=""
            ></input>
          </div>
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
          <button className="sign-up">Create Account</button>
        </form>
        <p className="already-have" style={{ color: "white" }}>
          Already have an account?{" "}
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Sign in.
          </Link>
        </p>
      </div>
    </div>
  );
}
