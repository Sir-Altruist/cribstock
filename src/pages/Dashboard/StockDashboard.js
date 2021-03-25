import React, { useState } from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";
import Sidebar from "../../components/Sidebar";

function StockDashboard() {
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
            style={{ margin: "120px auto 10px 50px" }}
          >
            <Container>
              <Header>
                <h2 style={{ color: "#132054", paddingLeft: "2rem" }}>
                  Do you want to?
                </h2>
              </Header>
              <div
                style={{
                  width: "85%",
                  height: "15rem",
                  backgroundColor: "#F8FAFD",
                  borderRadius: "8px",
                  display: "flex",
                  marginLeft: "2rem",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#C4C4C4",
                    borderRadius: "50%",
                    marginTop: "3.5rem",
                    marginLeft: "3rem",
                  }}
                ></div>
                <div style={{ marginTop: "3rem", marginLeft: "2rem" }}>
                  <h3 style={{ color: "#132054" }}>Explore Stocks</h3>
                  <p>Browse and invest in your various properties</p>
                </div>
              </div>
            </Container>
          </Segment>
          <Segment
            as="section"
            vertical
            basic
            style={{ margin: "0 auto 50px 50px" }}
          >
            <Container>
              <div
                style={{
                  width: "85%",
                  height: "15rem",
                  backgroundColor: "#F8FAFD",
                  borderRadius: "8px",
                  display: "flex",
                  marginLeft: "2rem",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "#C4C4C4",
                    borderRadius: "50%",
                    marginTop: "3.5rem",
                    marginLeft: "3rem",
                  }}
                ></div>
                <div style={{ marginTop: "3rem", marginLeft: "2rem" }}>
                  <h3 style={{ color: "#132054" }}>Sell Stocks</h3>
                  <p>Sell your already owned stocks </p>
                </div>
              </div>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default StockDashboard;
