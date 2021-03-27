import React, { useState } from "react";
import { Grid, Segment, Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

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
          <Sidebar activeItem={activeItem} handleClick={handleClick} />
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
                <div style={{ paddingRight: "2rem", paddingTop: "2rem" }}>
                  <Button
                    style={{
                      backgroundColor: "#3861FB",
                      color: "#ffffff",
                    }}
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
