import React from "react";
import { Image } from "semantic-ui-react";
import Bedroom from "../../assets/images/bedroom.jpg";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Stock2() {
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <div style={{ paddingTop: "1rem" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gridColumnGap: "1rem",
                marginTop: "2rem",
              }}
            >
              <Image src={Bedroom} alt="bedroom" className="bedroom" />
              <div>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  <Link
                    to="/stock/history2"
                    style={{ color: "#484848", textDecoration: "none" }}
                  >
                    Three Bedroom Flat
                  </Link>
                </p>
                <small style={{ color: "#888888" }}>Lekki Phase 1</small>
              </div>
            </div>
          </div>
        </Table.Cell>
        <Table.Cell>
          <div>
            <p
              style={{
                paddingTop: "2rem",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              <span>&#8358;</span>3,000
            </p>
          </div>
        </Table.Cell>
        <Table.Cell>
          <div>
            <p
              style={{
                paddingTop: "2rem",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              <span>&#8358;</span>7,000,000
            </p>
          </div>
        </Table.Cell>
        <Table.Cell>
          <div>
            <p
              style={{
                paddingTop: "2rem",
                fontWeight: "500",
                fontSize: "18px",
                color: "#E41111",
              }}
            >
              -9.0%
            </p>
          </div>
        </Table.Cell>
        <Table.Cell>
          <div>
            <p
              style={{
                paddingTop: "2rem",
                fontWeight: "500",
                fontSize: "18px",
                color: "#12A672",
              }}
            >
              +9.0%
            </p>
          </div>
        </Table.Cell>
        <Table.Cell>
          <div style={{ paddingTop: "1.5rem" }}>
            <p
              style={{
                paddingTop: "1rem",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              <span>&#8358;</span>3.8M
            </p>
            <small style={{ color: "#888888" }}>500</small>
          </div>
        </Table.Cell>
        <Table.Cell>
          <div>
            <p
              style={{
                paddingTop: "2rem",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              1000
            </p>
          </div>
        </Table.Cell>
      </Table.Row>
    </>
  );
}

export default Stock2;
