import React from "react";
import { Table } from "semantic-ui-react";
import Stock2 from "./Stock2";

function Head2() {
  return (
    <div style={{ overflowX: "auto" }}>
      <Table basic="very" unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#222531",
                lineHeight: "24px",
              }}
            >
              Stocks
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#222531",
                lineHeight: "24px",
              }}
            >
              Price
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#222531",
                lineHeight: "24px",
              }}
            >
              Market Cap
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#222531",
                lineHeight: "24px",
              }}
            >
              (30d - 1y)
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#222531",
                lineHeight: "24px",
              }}
            >
              1y
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#222531",
                lineHeight: "24px",
              }}
            >
              Volume (24hrs)
            </Table.HeaderCell>
            <Table.HeaderCell
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "#222531",
                lineHeight: "24px",
              }}
            >
              Circulating Supply
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Stock2 />
          <Stock2 />
          <Stock2 />
          <Stock2 />
        </Table.Body>
      </Table>
    </div>
  );
}

export default Head2;
