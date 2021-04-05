import React from "react";
import {
  Button,
  Menu,
  Sidebar,
  Grid,
  Segment,
  Container,
  Image,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Explore from "../../assets/icons/explore.svg";
import Cart from "../../assets/icons/cart.svg";

function StockdashboardMobile({
  activeItem,
  handleClick,
  visible,
  visibilityToggle,
  cancelSidebar,
}) {
  return (
    <Grid columns={1} style={{ marginTop: "7rem" }}>
      <Grid.Column style={{ marginLeft: "1rem" }}>
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
            <Segment style={{ margin: "1rem auto 10px 0" }} basic>
              <Container>
                <h2 style={{ color: "#132054", paddingLeft: "2rem" }}>
                  Do you want to?
                </h2>
                <div
                  style={{
                    width: "100%",
                    minHeight: "15rem",
                    backgroundColor: "#F8FAFD",
                    borderRadius: "8px",
                    display: "flex",
                    //   marginLeft: "2rem",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      marginTop: "3.5rem",
                      marginLeft: "1.5rem",
                    }}
                  >
                    <Image src={Explore} />
                  </div>
                  <div style={{ marginTop: "3rem", marginLeft: "1rem" }}>
                    <Link to="/stock/search">
                      <h3 style={{ color: "#132054" }}>Explore Stocks</h3>
                    </Link>
                    <p style={{ paddingTop: "1rem", textAlign: "left" }}>
                      Browse and invest in your various properties
                    </p>
                  </div>
                </div>
              </Container>
            </Segment>
            <Segment
              as="section"
              vertical
              basic
              style={{ margin: "0 auto 1rem 1rem" }}
            >
              <Container>
                <div
                  style={{
                    width: "100%",
                    height: "15rem",
                    backgroundColor: "#F8FAFD",
                    borderRadius: "8px",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      marginTop: "3.5rem",
                      marginLeft: "1.5rem",
                    }}
                  >
                    <Image src={Cart} size="tiny" />
                  </div>
                  <div style={{ marginTop: "3rem", marginLeft: "1rem" }}>
                    <Link to="/stock/history">
                      <h3 style={{ color: "#132054" }}>Sell Stocks</h3>
                    </Link>
                    <p style={{ paddingTop: "1rem", textAlign: "left" }}>
                      Sell your already owned stocks{" "}
                    </p>
                  </div>
                </div>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}
export default StockdashboardMobile;
