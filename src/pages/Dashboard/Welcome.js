import React, { useState } from "react";
import { Grid, Menu, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Welcome() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const handleClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
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
          <Menu fluid vertical tabular>
            <Menu.Item
              name="dashboard"
              active={activeItem === "dashboard"}
              onClick={handleClick}
              style={{
                lineHeight: "50px",
              }}
            />
            <Menu.Item
              name="portfolio"
              active={activeItem === "portfolio"}
              onClick={handleClick}
              style={{
                lineHeight: "50px",
              }}
            />
            <Menu.Item
              name="stock"
              active={activeItem === "stock"}
              onClick={handleClick}
              style={{
                lineHeight: "50px",
              }}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment
            as="section"
            vertical
            basic
            style={{
              width: "85%",
              height: "15rem",
              border: "1px solid #E7E7E7",
              margin: "120px auto 50px 35px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexFlow: "wrap",
              }}
            >
              <div style={{ paddingLeft: "2rem", paddingTop: "2rem" }}>
                <h2 style={{ color: "#132054" }}>Welcome to cribstock</h2>
                <p>
                  Complete account setup by registering your KYC and bank
                  details.
                </p>
              </div>
              <div style={{ paddingRight: "2rem", paddingTop: "2rem" }}>
                <Button
                  style={{
                    backgroundColor: "#3861FB",
                  }}
                >
                  <Link to="/details" style={{ color: "#ffffff" }}>
                    Continue
                  </Link>
                </Button>
              </div>
            </div>
          </Segment>
          <Segment
            as="section"
            vertical
            basic
            style={{
              width: "85%",
              height: "15rem",
              border: "1px solid #E7E7E7",
              margin: "0 auto 100px 35px",
            }}
          >
            <h2 style={{ color: "#2F2F2F", paddingLeft: "2rem" }}>Buy Stock</h2>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Welcome;
