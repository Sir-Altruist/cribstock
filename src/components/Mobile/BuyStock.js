import React from "react";
import {
  Icon,
  Button,
  Menu,
  Sidebar,
  Grid,
  Form,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

function BuystockMobile({
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
              <h2 style={{ color: "#132054" }}>Buy Stock</h2>
              <Form className="details">
                <Form.Input
                  id="buy-form-range"
                  type="text"
                  name="range"
                  label="Stock Price Range"
                />
                <Form.Input
                  id="buy-form-quantity"
                  type="text"
                  placeholder="0.00"
                  name="quantity"
                  label="Quantity"
                />
                <Form.Input
                  id="buy-form-dividend"
                  type="text"
                  placeholder="%"
                  name="dividend"
                  label="Minimum Dividend Yield"
                />
                <Form.Input
                  id="buy-form-appreciation"
                  type="text"
                  placeholder="%"
                  name="appreciation"
                  label="Minimum stock appreciation/yr"
                />
                <Form.Input
                  id="buy-form-location"
                  type="text"
                  placeholder="e.g lagos"
                  name="location"
                  label="Location"
                />
                <Form.Input
                  id="buy-form-type"
                  type="text"
                  placeholder="e.g Office Complex"
                  name="type"
                  label="Stock Type"
                />
                <Form.Input
                  id="buy-form-price"
                  type="text"
                  placeholder="₦0.0000"
                  name="price"
                  label="Stock Price"
                />
                <div style={{ paddingLeft: "1rem", marginTop: "2rem" }}>
                  <Button type="submit" className="mobile-details-btn">
                    Buy Stock
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
export default BuystockMobile;
