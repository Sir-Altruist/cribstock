import React from "react";
import {
  Button,
  Menu,
  Sidebar,
  Grid,
  Segment,
  Icon,
  Search,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Head } from "../Stocks";

function StocksearchMobile({
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
            <Segment basic>
              <h2 style={{ color: "#132054" }}>Stocks</h2>
              <Search placeholder="Search Stock" size="mini" />
              <p style={{ paddingTop: "1rem" }}>
                <strong>Sort by: Default</strong> <Icon name="caret down" />
              </p>
              <Head />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}
export default StocksearchMobile;
