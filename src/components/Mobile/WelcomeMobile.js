import React from "react";
import {
  Button,
  Menu,
  Sidebar,
  Grid,
  Segment,
  Container,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Cart from "../../assets/icons/cart.svg";

function WelcomeMobile({
  activeItem,
  handleClick,
  visible,
  visibilityToggle,
  cancelSidebar,
}) {
  return (
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
            <Segment
              as="section"
              vertical
              basic
              style={{
                width: "100%",
                minHeight: "12rem",
                border: "1px solid #E7E7E7",
                margin: "1rem .5rem 20px .5rem",
              }}
            >
              <Container>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ paddingLeft: "2rem", paddingTop: "2rem" }}>
                    <h2 style={{ color: "#132054" }}>Welcome to cribstock</h2>
                    <p>
                      Complete account setup by registering your KYC and bank
                      details.
                    </p>
                  </div>
                  <div style={{ marginLeft: "19rem" }}>
                    <Button
                      className="continue-btn"
                      as={Link}
                      to="/dashboard/details"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </Container>
            </Segment>
            <Segment
              as="section"
              vertical
              basic
              style={{
                width: "100%",
                height: "12rem",
                margin: "0 .5rem 100px .5rem",
              }}
            >
              <Grid>
                <Grid.Row>
                  <Grid.Column computer={8} mobile={16}>
                    <div
                      style={{
                        width: "100%",
                        minHeight: "12rem",
                        backgroundColor: "#FAF5F1",
                        border: "1px solid #E7E7E7",
                        display: "flex",
                        paddingTop: "2rem",
                        paddingLeft: "2rem",
                      }}
                    >
                      <Image
                        src={Cart}
                        style={{ marginBottom: "7rem", paddingRight: "1rem" }}
                      />
                      <div>
                        <h2>
                          <Link
                            to="/portfolio/buystock"
                            style={{ color: "#2F2F2F" }}
                          >
                            Buy Stock
                          </Link>
                        </h2>
                        <p>Browse and invest in your various properties</p>
                      </div>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={8} mobile={16}>
                    <div
                      style={{
                        width: "100%",
                        minHeight: "15rem!important",
                        backgroundColor: "#FAF5F1",
                        border: "1px solid #E7E7E7",
                        display: "flex",
                        paddingTop: "2rem",
                        paddingLeft: "2rem",
                        margin: "2rem 0",
                      }}
                    >
                      <Image
                        src={Cart}
                        style={{ marginBottom: "7rem", paddingRight: "1rem" }}
                      />
                      <div>
                        <h2>
                          <Link
                            to="/portfolio/sellstock"
                            style={{ color: "#2F2F2F" }}
                          >
                            Sell Stock
                          </Link>
                        </h2>
                        <p style={{ paddingBottom: "2rem" }}>
                          Browse and invest in your various properties
                        </p>
                      </div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}
export default WelcomeMobile;
