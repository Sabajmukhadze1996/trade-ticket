import React from "react";
import "./sign-in.css";
import { FaUserCircle } from "react-icons/fa";

const SignIn = () => {
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      className="signup-form"
    >
      <div className="signin-form-header">
        <h1>
          <FaUserCircle />
          Sign in
        </h1>
      </div>

      <div className="signin-form-inputs">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email..."
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password..."
          required
        />
      </div>

      <div className="signin-form-footer">
        <button type="submit">SIGN IN</button>
      </div>
    </form>
  );
};

export default SignIn;
