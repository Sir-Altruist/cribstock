import React, { useState } from "react";
import { Container, Grid, Header, Segment, Image } from "semantic-ui-react";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import Explore from "../../assets/icons/explore.svg";
import Cart from "../../assets/icons/cart.svg";
import { StockdashboardMobile } from "../../components/Mobile";

function StockDashboard() {
  const [activeItem, setActiveItem] = useState("stock");
  const handleClick = (e, { name }) => {
    setActiveItem(name);
  };
  const [visible, setVisible] = useState(false);
  const visibilityToggle = () => setVisible(!visible);
  const cancelSidebar = () => setVisible(false);
  return (
    <Grid>
      <Grid.Row only="computer">
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
        <Grid.Column width={12} only="computer">
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
                    borderRadius: "50%",
                    marginTop: "3.5rem",
                    marginLeft: "3rem",
                  }}
                >
                  <Image src={Explore} />
                </div>
                <div style={{ marginTop: "3rem", marginLeft: "2rem" }}>
                  <Link to="/stock/search">
                    <h3 style={{ color: "#132054" }}>Explore Stocks</h3>
                  </Link>
                  <p style={{ paddingTop: "1rem" }}>
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
                    borderRadius: "50%",
                    marginTop: "3.5rem",
                    marginLeft: "3rem",
                  }}
                >
                  <Image src={Cart} />
                </div>
                <div style={{ marginTop: "3rem", marginLeft: "2rem" }}>
                  <Link to="/stock/history">
                    <h3 style={{ color: "#132054" }}>Sell Stocks</h3>
                  </Link>
                  <p style={{ paddingTop: "1rem" }}>
                    Sell your already owned stocks{" "}
                  </p>
                </div>
              </div>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="mobile">
        <StockdashboardMobile
          activeItem={activeItem}
          visible={visible}
          visibilityToggle={visibilityToggle}
          handleClick={handleClick}
          cancelSidebar={cancelSidebar}
        />
      </Grid.Row>
    </Grid>
  );
}

export default StockDashboard;
