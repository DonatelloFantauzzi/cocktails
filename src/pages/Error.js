import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>OOOOps!! qualcosa è andato storto</h1>
        <Link to="/" className="btn btn-primary">
          torna alla home
        </Link>
      </div>
    </section>
  );
};

export default Error;
