import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const { loading, notify } = useAlert();
  const history = useHistory();
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      loading.show();

      await resetPassword(emailRef.current.value);
      notify.show({ message: "verify your email inbox" });
      history.push("/login");
    } catch (error) {
      notify.show({ message: error, error: true });
    } finally {
      loading.hide();
    }
  };

  return (
    <section id="login-page" className="container">
      <h1>Reset password:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={emailRef} required placeholder="email" />

        <button>Reset</button>
      </form>
      Need an account? <Link to="/signup">Sign up</Link>
    </section>
  );
}
