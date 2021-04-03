import React, { useState } from "react";
import { Grid, Segment, Button, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Cart from "../../assets/icons/cart.svg";
import { WelcomeMobile } from "../../components/Mobile";

function Welcome() {
  const [activeItem, setActiveItem] = useState("dashboard");
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
        <Grid.Column width={12}>
          <Segment
            as="section"
            vertical
            basic
            style={{
              width: "85%",
              minHeight: "12rem",
              border: "1px solid #E7E7E7",
              margin: "120px auto 20px 35px",
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
                <div style={{ marginRight: "2rem", marginTop: "1rem" }}>
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
              width: "85%",
              height: "12rem",
              margin: "0 auto 100px 35px",
            }}
          >
            <Container>
              <Grid>
                <Grid.Row>
                  <Grid.Column computer={8} mobile={16}>
                    <div
                      style={{
                        width: "100%",
                        height: "12rem",
                        backgroundColor: "#FAF5F1",
                        border: "1px solid #E7E7E7",
                        display: "flex",
                        paddingTop: "2rem",
                        paddingLeft: "2rem",
                        marginTop: "2rem",
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
                        height: "12rem",
                        backgroundColor: "#FAF5F1",
                        border: "1px solid #E7E7E7",
                        display: "flex",
                        paddingTop: "2rem",
                        paddingLeft: "2rem",
                        marginTop: "2rem",
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
                        <p>Browse and invest in your various properties</p>
                      </div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="mobile">
        <WelcomeMobile
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

export default Welcome;
