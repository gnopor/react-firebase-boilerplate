import React, { useRef } from "react";

export default function ForgotPassword() {
  const emailRef = useRef();

  return (
    <section id="login-page" className="container">
      <h1>Reset password:</h1>
      <form>
        <input type="text" ref={emailRef} required placeholder="email" />

        <button>Reset</button>
      </form>
    </section>
  );
}
