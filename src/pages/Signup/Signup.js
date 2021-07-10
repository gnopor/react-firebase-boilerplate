import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./Signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const ConfirmPasswordRef = useRef();

  return (
    <section id="signup-page" className="container">
      <h1>Sign up:</h1>
      <form>
        <input type="text" ref={emailRef} required placeholder="email" />
        <input
          type="password"
          ref={passwordRef}
          required
          placeholder="password"
        />

        <input
          type="password"
          ref={ConfirmPasswordRef}
          required
          placeholder="confirm password"
        />
        <button>SignUp</button>
      </form>
      Already have an account? <Link to="/login">Login</Link>
    </section>
  );
}
