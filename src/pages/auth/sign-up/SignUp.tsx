import React from "react";
import "./sign-up.css";
import { HiUserAdd } from "react-icons/hi"

const SignUp = () => {
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      className="signup-form"
    >
      <div className="signup-form-header">
        <h1><HiUserAdd />Sign up</h1>
      </div>

      <div className="signup-form-inputs">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email..."
          required
        />

        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username..."
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

      <div className="signup-form-footer">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
};

export default SignUp;
