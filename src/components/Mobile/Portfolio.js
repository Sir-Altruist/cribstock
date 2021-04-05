import React, { useState } from "react";
import {
  Button,
  Menu,
  Sidebar,
  Grid,
  Segment,
  Container,
  Icon,
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
          <Button
            icon
            onClick={visibilityToggle}
            style={{ backgroundColor: "transparent" }}
          >
            <Icon name={visible ? "times" : "bars"} size="large" />
          </Button>
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
                      size="tiny"
                      onClick={() => setOpen(true)}
                      className="history-btn"
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
                    // padding: "0 2rem",
                    backgroundColor: "#FAF5F1",
                    border: "1px solid #FAF5F1",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <span>Total Portfolio Value</span>
                      <h4>
                        <span>&#x20A6;30,000,000</span>
                      </h4>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <span>24h Change</span>
                      <h4 style={{ color: "#12A672" }}>+9.0%</h4>
                    </div>
                    <div>
                      <span>No of stocks</span>
                      <h4 style={{ textAlign: "right" }}>3000</h4>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      paddingTop: "2rem",
                    }}
                  >
                    <div>
                      <span>Dividends</span>
                      <h4>
                        <span>&#x20A6;3000</span>
                      </h4>
                    </div>
                    <div>
                      <span>Purchased</span>
                      <h4 style={{ textAlign: "center" }}>1500</h4>
                    </div>
                    <div>
                      <span>Sold</span>
                      <h4 style={{ textAlign: "center" }}>1500</h4>
                    </div>
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
