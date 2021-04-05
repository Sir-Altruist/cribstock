import React from "react";
import {
  Button,
  Icon,
  Menu,
  Sidebar,
  Grid,
  Form,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

function DetailsMobile({
  activeItem,
  handleClick,
  visible,
  visibilityToggle,
  cancelSidebar,
}) {
  return (
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
              <div style={{ padding: "5px 0 10px .5rem" }}>
                <h2>Tell us about yourself</h2>
                <p>
                  So we can setup your account right.
                  <br /> This will only take a few minutes.
                </p>
              </div>
              <Form>
                <Form.Input
                  id="details-form-first"
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  label="First Name"
                  required
                />
                <Form.Input
                  id="register-form-last"
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  label="Last Name"
                  required
                />
                <Form.Input
                  id="register-form-mobile"
                  type="text"
                  placeholder="Mobile Number (1)"
                  name="text"
                  label="Mobile Number"
                  required
                />
                <Form.Input
                  id="register-form-birth"
                  type="date"
                  placeholder="Date Of Birth"
                  name="birth"
                  label="Date of Birth"
                />
                <Form.Input
                  id="register-form-address"
                  type="text"
                  placeholder="Address"
                  name="address"
                  label="Address"
                />
                <Form.Input
                  id="register-form-kin"
                  type="text"
                  placeholder="Next Of Kin"
                  name="kin"
                  label="Next Of Kin"
                />
                <Form.Input
                  id="register-form-bvn"
                  type="text"
                  placeholder="BVN"
                  name="bvn"
                  label="Bank Verification Number(BVN)"
                  required
                />
                <Form.Input
                  id="register-form-govt"
                  type="text"
                  name="govt"
                  label="Govt ID"
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
export default DetailsMobile;
