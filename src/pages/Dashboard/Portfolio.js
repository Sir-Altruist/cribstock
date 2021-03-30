import React, { useState } from "react";
import { Grid, Segment, Button, Container, Table } from "semantic-ui-react";
import { Head } from "../../components/Stocks";
import Sidebar from "../../components/Sidebar";
import { StockModal } from "../../components/Modal";

function Portfolio() {
  const [activeItem, setActiveItem] = useState("portfolio");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column
            width={4}
            style={{
              backgroundColor: "#F8FAFD",
              minHeight: "100vh",
              paddingTop: "120px",
              textAlign: "center",
            }}
          >
            <Sidebar activeItem={activeItem} handleClick={handleClick} />
          </Grid.Column>
          <Grid.Column width={12} only="computer">
            <Segment
              as="section"
              vertical
              basic
              style={{ margin: "120px auto 10px 50px" }}
            >
              <Container>
                <Grid centered>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <h2 style={{ color: "#132054" }}>Portfolio</h2>
                    </Grid.Column>
                    <Grid.Column width={5}></Grid.Column>
                    <Grid.Column width={5} className="sell-buy">
                      <Button color="blue" onClick={() => setOpen(true)}>
                        Buy/Sell Stock
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <section
                  style={{
                    width: "86%",
                    minHeight: "10rem",
                    margin: "2rem 0",
                    padding: "0 2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    backgroundColor: "#FAF5F1",
                    border: "1px solid #FAF5F1",
                    borderRadius: "8px",
                  }}
                >
                  <div>
                    <span>Total Portfolio Value</span>
                    <h4>N30,000,000</h4>
                  </div>
                  <div>
                    <span>24h Change</span>
                    <h4 style={{ color: "#12A672" }}>+9.0%</h4>
                  </div>
                  <div>
                    <span>No of stocks</span>
                    <h4>3000</h4>
                  </div>
                  <div>
                    <span>Dividends</span>
                    <h4>N3000</h4>
                  </div>
                  <div>
                    <span>Purchased</span>
                    <h4>1500</h4>
                  </div>
                  <div>
                    <span>Sold</span>
                    <h4>1500</h4>
                  </div>
                </section>
                <section
                  style={{
                    width: "86%",
                    height: "3rem",
                    display: "flex",
                    border: "1px solid #F0F2F5",
                    backgroundColor: "#F0F2F5",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: "80%",
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                      margin: "5px auto",
                    }}
                  >
                    <p style={{ textAlign: "center", paddingTop: ".5rem" }}>
                      Purchased
                    </p>
                  </div>
                  <div style={{ width: "50%", textAlign: "center" }}>
                    <p style={{ paddingTop: ".7rem" }}>Sold</p>
                  </div>
                </section>
                <Grid style={{ marginTop: "5rem" }}>
                  <Grid.Row columns={1}>
                    <Head />
                  </Grid.Row>
                </Grid>
              </Container>
            </Segment>
          </Grid.Column>
          <Grid.Column width={12} only="mobile">
            <Segment
              as="section"
              vertical
              basic
              style={{ margin: "120px auto 10px -1rem" }}
            >
              <Container>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <h2 style={{ color: "#132054" }}>Portfolio</h2>
                    </Grid.Column>
                    <Grid.Column width={7}></Grid.Column>
                    <Grid.Column width={5} className="sell-buy">
                      <Button color="blue" onClick={() => setOpen(true)}>
                        Buy/Sell Stock
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Table
                  unstackable
                  style={{
                    backgroundColor: "#FAF5F1",
                    border: "1px solid #FAF5F1",
                    borderRadius: "8px",
                  }}
                >
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Total Portfolio Value</Table.HeaderCell>
                      <Table.HeaderCell>24h Change</Table.HeaderCell>
                      <Table.HeaderCell>No of stocks</Table.HeaderCell>
                      <Table.HeaderCell>Dividends</Table.HeaderCell>
                      <Table.HeaderCell>Purchased</Table.HeaderCell>
                      <Table.HeaderCell>Sold</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <h4>N30,000,000</h4>
                      </Table.Cell>
                      <Table.Cell>
                        <h4 style={{ color: "#12A672" }}>+9%</h4>
                      </Table.Cell>
                      <Table.Cell>
                        <h4>3000</h4>
                      </Table.Cell>
                      <Table.Cell>
                        <h4>N3000</h4>
                      </Table.Cell>
                      <Table.Cell>
                        <h4>1500</h4>
                      </Table.Cell>
                      <Table.Cell>
                        <h4>1500</h4>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <section
                  style={{
                    width: "100%",
                    height: "3rem",
                    display: "flex",
                    border: "1px solid #F0F2F5",
                    backgroundColor: "#F0F2F5",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: "80%",
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                      margin: "5px auto",
                    }}
                  >
                    <p style={{ textAlign: "center", paddingTop: ".5rem" }}>
                      Purchased
                    </p>
                  </div>
                  <div style={{ width: "50%", textAlign: "center" }}>
                    <p style={{ paddingTop: ".7rem" }}>Sold</p>
                  </div>
                </section>
                <Grid style={{ marginTop: "5rem" }}>
                  <Grid.Row columns={1}>
                    <Head />
                  </Grid.Row>
                </Grid>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <StockModal open={open} handleClose={handleClose} />
    </>
  );
}

export default Portfolio;
