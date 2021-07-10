import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";
import "./Signup.css";

export default function Signup() {
  const { signup } = useAuth();
  const { loading, notify } = useAlert();
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const ConfirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      loading.show();

      if (passwordRef.current.value !== ConfirmPasswordRef.current.value) {
        throw new Error("Password do not match");
      }
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      notify.show({ message: error, error: true });
    } finally {
      loading.hide();
    }
  };

  return (
    <section id="signup-page" className="container">
      <h1>Sign up:</h1>
      <form onSubmit={handleSubmit}>
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
