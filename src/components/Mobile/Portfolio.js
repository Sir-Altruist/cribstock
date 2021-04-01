import React, { useState } from "react";
import {
  Button,
  Menu,
  Sidebar,
  Grid,
  Segment,
  Container,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { StockModal } from "../Modal";
import { Head } from "../../components/Stocks";

function PortfolioMobile({
  activeItem,
  handleClick,
  visible,
  visibilityToggle,
  cancelSidebar,
}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Grid columns={1} style={{ marginTop: "7rem" }}>
        <Grid.Column style={{ marginLeft: "1.5rem" }}>
          <Button onClick={visibilityToggle} content="Sidebar" />
        </Grid.Column>
        <Grid.Column>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={cancelSidebar}
              vertical
              visible={visible}
              width="thin"
              style={{ marginTop: "2rem" }}
            >
              <Menu.Item
                name="dashboard"
                active={activeItem === "dashboard"}
                onClick={handleClick}
                style={{
                  lineHeight: "50px",
                }}
                as={Link}
                to="/dashboard/index"
              />
              <Menu.Item
                name="portfolio"
                active={activeItem === "portfolio"}
                onClick={handleClick}
                style={{
                  lineHeight: "50px",
                }}
                as={Link}
                to="/portfolio/index"
              />
              <Menu.Item
                name="stock"
                active={activeItem === "stock"}
                onClick={handleClick}
                style={{
                  lineHeight: "50px",
                }}
                as={Link}
                to="/stock/index"
              />
            </Sidebar>
            <Sidebar.Pusher dimmed={visible} style={{ minHeight: "100vh" }}>
              <Segment basic>
                <Container>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h2 style={{ color: "#132054" }}>Portfolio</h2>
                    <Button
                      color="blue"
                      size="tiny"
                      onClick={() => setOpen(true)}
                    >
                      Buy/Sell Stock
                    </Button>
                  </div>
                </Container>
                <section
                  style={{
                    width: "100%",
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
                    <h4 style={{ color: "#12A672", textAlign: "right" }}>
                      +9.0%
                    </h4>
                  </div>
                  <div>
                    <span>No of stocks</span>
                    <h4>3000</h4>
                  </div>
                  <div>
                    <span>Dividends</span>
                    <h4 style={{ textAlign: "right" }}>N3000</h4>
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
                <Grid style={{ marginTop: "1rem" }}>
                  <Grid.Row columns={1}>
                    <Head />
                  </Grid.Row>
                </Grid>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
      <StockModal open={open} handleClose={handleClose} />
    </React.Fragment>
  );
}
export default PortfolioMobile;
