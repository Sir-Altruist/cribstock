import React from "react";
import PropTypes from "prop-types";

function Property({ property }) {
  return (
    <section
      style={{
        marginTop: "5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "58px",
          minWidth: "58px",
          height: "58px",
          backgroundColor: "#3861FB",
          color: "#ffffff",
          borderRadius: "50%",
          textAlign: "center",
          paddingTop: "1rem",
        }}
      >
        <h2>{property.number}</h2>
      </div>
      <div
        style={{
          paddingLeft: "1rem",
        }}
      >
        <h3 style={{ color: "#132054" }}>{property.title}</h3>
        <p>{property.details}</p>
      </div>
    </section>
  );
}

Property.propTypes = {
  properties: PropTypes.object,
};

export default Property;
