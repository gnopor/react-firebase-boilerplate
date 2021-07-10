import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <section id="login-page" className="container">
      <h1>Login:</h1>
      <form>
        <input type="text" ref={emailRef} required placeholder="email" />
        <input
          type="password"
          ref={passwordRef}
          required
          placeholder="password"
        />
        <Link to="/forgot-password">Reset Password</Link>
        <button>Login</button>
      </form>
      Don't have an account yet? <Link to="/signup">SignUP</Link>
    </section>
  );
}
