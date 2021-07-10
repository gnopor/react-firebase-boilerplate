import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";

export default function Update() {
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const { loading, notify } = useAlert();
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  useEffect(() => {
    emailRef.current.value = currentUser.email;
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      loading.show();

      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        throw new Error("Password do not match");
      }

      const promises = [];
      emailRef.current.value !== currentUser.email &&
        promises.push(updateEmail(emailRef.current.value));

      passwordRef.current.value &&
        promises.push(updatePassword(passwordRef.current.value));

      await Promise.all(promises);
      history.push("/");
    } catch (error) {
      notify.show({ message: error, error: true });
    } finally {
      loading.hide();
    }
  };

  return (
    <section id="signup-page" className="container">
      <h1>Updade profile:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={emailRef} required placeholder="email" />
        <input type="password" ref={passwordRef} placeholder="password" />
        <input
          type="password"
          ref={passwordConfirmRef}
          placeholder="confirm password"
        />
        <button>Update</button>
      </form>
    </section>
  );
}
