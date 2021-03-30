import React from "react";
import { Table } from "semantic-ui-react";
import Stock from "./Stock";

function Head() {
  return (
    <Table basic="very" unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>stocks</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Market Cap</Table.HeaderCell>
          <Table.HeaderCell>24h</Table.HeaderCell>
          <Table.HeaderCell>1Y</Table.HeaderCell>
          <Table.HeaderCell>Volume</Table.HeaderCell>
          <Table.HeaderCell>Circulating Supply</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Stock />
        <Stock />
        <Stock />
        <Stock />
      </Table.Body>
    </Table>
  );
}

export default Head;
