import React, { useRef } from "react";

export default function Update() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const ConfirmPasswordRef = useRef();

  return (
    <section id="signup-page" className="container">
      <h1>Updade profile:</h1>
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
        <button>Update</button>
      </form>
    </section>
  );
}
