import React from "react";
import { Link } from "react-router-dom";

function Footer1() {
  return (
    <div>
      <h2
        style={{ color: "#132054", paddingTop: "2rem", paddingBottom: "1rem" }}
      >
        Properties
      </h2>
      <p>
        <Link style={{ color: "black" }}>Property Stcoks</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Free Training</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Portfolio Tracker</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Order Book</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>World Brick Day</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Trading Sessions</Link>
      </p>
    </div>
  );
}

export default Footer1;
