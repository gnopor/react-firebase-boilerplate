import React, { useState } from "react";

import { useAuth } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";
import "./Home.css";

export default function Home() {
  const { loading, notify } = useAlert();
  const { logout } = useAuth();

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const showMessage = (text, is_error = false) => {
    setError(is_error);
    setMessage(text);
  };

  const hideMessage = () => {
    setMessage();
  };

  return (
    <section className="home container">
      <div className="actions">
        {/* loading playground */}
        <article>
          <button onClick={loading.show}>Show loading</button>
          <button onClick={loading.hide}>Hide loading</button>
        </article>

        {/* notification playground  */}
        <article>
          <button onClick={() => notify.show({ message: "success message" })}>
            Show notification success
          </button>
          <button
            onClick={() =>
              notify.show({ message: "error message", error: true })
            }
          >
            show notification error
          </button>
        </article>

        {/* message playground  */}
        <article>
          {message && (
            <div
              style={{
                color: "#FFF",
                background: error ? "indianred" : "mediumseagreen",
              }}
            >
              {message}

              <span
                style={{ margin: "5px", cursor: "pointer" }}
                onClick={hideMessage}
              >
                x
              </span>
            </div>
          )}
          <button onClick={() => showMessage("success message")}>
            Shows success message
          </button>
          <button onClick={() => showMessage("error message", true)}>
            show error message
          </button>
        </article>

        {/* auth playground */}
        <article>
          <button onClick={logout}>__LOG OUT__</button>
        </article>
      </div>
    </section>
  );
}
