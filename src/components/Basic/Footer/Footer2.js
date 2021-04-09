import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Footer2() {
  return (
    <div>
      <h2
        style={{ color: "#132054", paddingTop: "2rem", paddingBottom: "1rem" }}
      >
        Company
      </h2>
      <p>
        <Link style={{ color: "black" }}>About Us</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Terms of Use</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Privacy Policy</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Disclaimer</Link>
      </p>
      <p>
        <Link style={{ color: "black" }}>Methodology</Link>
      </p>
      <div style={{ display: "flex" }}>
        <span>
          <Link style={{ color: "black" }}>Careers</Link>
        </span>
        <Button
          size="mini"
          circular
          style={{
            backgroundColor: "#3861fb",
            marginLeft: ".5rem",
            color: "white",
            marginBottom: "1rem",
          }}
        >
          We are hiring!
        </Button>
      </div>
    </div>
  );
}

export default Footer2;
