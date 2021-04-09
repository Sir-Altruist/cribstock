import React from "react";
import { Link } from "react-router-dom";

function Footer3() {
  return (
    <div>
      <h2
        style={{ color: "#132054", paddingTop: "2rem", paddingBottom: "1rem" }}
      >
        Support
      </h2>
      <p>
        <Link style={{ color: "black" }}>Request Form</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Contact Support</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>FAQ</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Glossary</Link>
      </p>
    </div>
  );
}

export default Footer3;
