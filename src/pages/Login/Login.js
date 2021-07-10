import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";
import "./Login.css";

export default function Login() {
  const history = useHistory();
  const { login } = useAuth();
  const { loading, notify } = useAlert();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      loading.show();

      await login(emailRef.current.value, passwordRef.current.value);

      history.push("/");
    } catch (error) {
      notify.show({ message: error, error: true });
    } finally {
      loading.hide();
    }
  };
  return (
    <section id="login-page" className="container">
      <h1>Login:</h1>
      <form onSubmit={handleSubmit}>
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
