import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="home container">
      <div className="actions">
        <article>
          <button>Show loading</button> <button>Hide loading</button>
        </article>
        <article>
          <button>Show notification</button> <button>Hide notification</button>
        </article>
        <article>
          <button>Shows in form</button> <button>Hide in form</button>
        </article>
      </div>
    </section>
  );
}
