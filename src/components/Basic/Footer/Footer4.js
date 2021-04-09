import React from "react";
import { Link } from "react-router-dom";

function Footer4() {
  return (
    <div>
      <h2
        style={{ color: "#132054", paddingTop: "2rem", paddingBottom: "1rem" }}
      >
        Socials
      </h2>
      <p>
        <Link style={{ color: "black" }}>Facebook</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Twitter</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Telegram</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Instagram</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Interactive Chat</Link>
      </p>
    </div>
  );
}

export default Footer4;
