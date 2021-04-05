import React from "react";
import {
  Button,
  Menu,
  Sidebar,
  Grid,
  Form,
  Segment,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

function SellstockMobile({
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
              <h2 style={{ color: "#132054" }}>Sell Stock</h2>
              <Form className="details">
                <Form.Input
                  id="sell-form-range"
                  type="text"
                  name="range"
                  label="Stock"
                />
                <Form.Input
                  id="sell-form-quantity"
                  type="text"
                  placeholder="0.00"
                  name="quantity"
                  label="Quantity"
                />
                <Form.Input
                  id="sell-form-dividend"
                  type="text"
                  placeholder="$0.0000"
                  name="dividend"
                  label="Price Per Stock"
                />
                <Form.Input
                  id="buy-form-appreciation"
                  type="text"
                  placeholder="$0.0000"
                  name="appreciation"
                  label="Total Price"
                />
                <div style={{ paddingLeft: "1rem", marginTop: "2rem" }}>
                  <Button type="submit" className="mobile-details-btn">
                    Sell Stock
                  </Button>
                </div>
              </Form>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}
export default SellstockMobile;
