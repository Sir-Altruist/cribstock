import React, { useState } from "react";
import { Container, Grid, Segment, Image, Button } from "semantic-ui-react";
import Chart from "../../assets/icons/chart.svg";
import Shop from "../../assets/icons/shop.svg";
import { Stockhistory2Mobile } from "../../components/Mobile";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";

function StockHistory2() {
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
              <Grid>
                <Grid.Row>
                  <Grid.Column computer={9}>
                    <h2 style={{ color: "#132054" }}>Three Bedroom Flat</h2>
                    <p>Victoria Island</p>
                    <Image src={Chart} size="big" />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "10rem",
                      }}
                    >
                      <div>
                        <p>Price</p>
                        <p style={{ fontWeight: "bold" }}>
                          <span>&#x20A6;3,000</span>
                        </p>
                      </div>
                      <div>
                        <p>Market cap</p>
                        <p style={{ fontWeight: "bold" }}>
                          <span>&#x20A6;7,000,000</span>
                        </p>
                      </div>
                      <div>
                        <p>(30d - 1y)</p>
                        <p style={{ fontWeight: "bold", color: "#E41111" }}>
                          -9.0%
                        </p>
                      </div>
                      <div>
                        <p>1y</p>
                        <p style={{ fontWeight: "bold", color: "#12A672" }}>
                          +9.0%
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "2rem 0 3rem 0",
                      }}
                    >
                      <div>
                        <p style={{ paddingRight: "1rem" }}>Volume(24hrs)</p>
                        <p style={{ fontWeight: "bold" }}>
                          <span>&#x20A6;3.8M</span>
                        </p>
                        <small>500</small>
                      </div>
                      <div>
                        <p style={{ textAlign: "center" }}>
                          Circulating Supply
                        </p>
                        <p style={{ fontWeight: "bold", textAlign: "center" }}>
                          1000
                        </p>
                      </div>
                      <div>
                        <p style={{ textAlign: "right" }}>Average Volume</p>
                        <p style={{ fontWeight: "bold", textAlign: "right" }}>
                          9,80,190
                        </p>
                      </div>
                    </div>
                    <div style={{ paddingTop: "5rem" }}>
                      <h3>Stock History</h3>
                      <ul style={{ listStyleType: "none" }}>
                        <li style={{ paddingTop: ".5rem" }}>
                          -Strategically located only 10 minutes away from
                          Barcelona;
                        </li>
                        <li style={{ paddingTop: ".5rem" }}>
                          -40% of the houses have been reserved;
                        </li>
                        <li style={{ paddingTop: ".5rem" }}>
                          -The developer aims to have all bookings completed
                          within 3 months;
                        </li>
                        <li style={{ paddingTop: ".5rem" }}>
                          -Construction has already started;
                        </li>
                        <li style={{ paddingTop: ".5rem" }}>
                          -Smart and sustainable building that will integrate
                          solar energy and energy efficiency;
                        </li>
                        <li style={{ paddingTop: ".5rem" }}>
                          -The scoring for this opportunity is BBB.
                        </li>
                      </ul>
                    </div>
                    <div style={{ padding: "3rem 0" }}>
                      <h3>Location</h3>
                      <p>
                        The project is located in Montcada, a town of Catalonia,
                        in the Vallès Occidental region, 12 km from Barcelona.
                      </p>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={5}>
                    <div className="history_card">
                      <div className="history_circle">
                        <Image src={Shop} style={{ margin: "25% auto" }} />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          textAlign: "center",
                          top: "11rem",
                        }}
                      >
                        <h3>Sell Stocks</h3>
                        <span>
                          Invest and track all your stocks in one place.
                        </span>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: "30%",
                          right: "20%",
                          top: "21rem",
                        }}
                      >
                        <Button
                          as={Link}
                          to="/portfolio/sellstock"
                          className="history-btn"
                        >
                          Sell Stock
                        </Button>
                      </div>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={2}></Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Grid.Column>
        <Grid.Column width={12} only="mobile">
          <Segment
            as="section"
            vertical
            basic
            style={{ margin: "120px auto 10px 0" }}
          >
            <Container>
              <Grid>
                <Grid.Row>
                  <Grid.Column computer={16}>
                    <h2 style={{ color: "#132054" }}>Three Bedroom Flat</h2>
                    <p>Victoria Island</p>
                    <Image src={Chart} size="big" />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginTop: "5rem",
                        marginLeft: "-6rem",
                      }}
                    >
                      <p>Price</p>
                      <p>Market cap</p>
                      <p>24h</p>
                      <p>1Y</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginLeft: "-6rem",
                      }}
                    >
                      <p style={{ fontWeight: "bold" }}>N3,000</p>
                      <p style={{ fontWeight: "bold" }}>N7,000,000</p>
                      <p style={{ fontWeight: "bold", color: "#E41111" }}>
                        -9.0%
                      </p>
                      <p style={{ fontWeight: "bold", color: "#12A672" }}>
                        +9.0%
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginTop: "1rem",
                        marginLeft: "-6rem",
                      }}
                    >
                      <p>Volume</p>
                      <p>Circulating Supply</p>
                      <p>Average Volume</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginLeft: "-6rem",
                      }}
                    >
                      <div style={{ marginLeft: "-3rem" }}>
                        <p style={{ fontWeight: "bold" }}>N3.8M</p>
                        <small>N8.8M</small>
                      </div>
                      <p style={{ fontWeight: "bold" }}>1000</p>
                      <p style={{ fontWeight: "bold" }}>9,80,190</p>
                    </div>
                    <div style={{ paddingTop: "5rem" }}>
                      <h3>Stock History</h3>
                      <ul style={{ listStyleType: "none" }}>
                        <li style={{ paddingTop: ".5rem" }}>
                          -Strategically located only 10 minutes away from
                          Barcelona;
                        </li>
                        <li style={{ paddingTop: ".5rem" }}>
                          -40% of the houses have been reserved;
                        </li>
                        <li style={{ paddingTop: ".5rem" }}>
                          -The developer aims to have all bookings completed
                          within 3 months;
                        </li>
                        <li style={{ paddingTop: ".5rem" }}>
                          -Construction has already started;
                        </li>
                        <li style={{ paddingTop: ".5rem" }}>
                          -Smart and sustainable building that will integrate
                          solar energy and energy efficiency;
                        </li>
                        <li style={{ paddingTop: ".5rem" }}>
                          -The scoring for this opportunity is BBB.
                        </li>
                      </ul>
                    </div>
                    <div style={{ padding: "3rem 0" }}>
                      <h3>Location</h3>
                      <p>
                        The project is located in Montcada, a town of Catalonia,
                        in the Vallès Occidental region, 12 km from Barcelona.
                      </p>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={5}>
                    <div className="history_card">
                      <div className="history_circle"></div>
                      <div
                        style={{
                          position: "absolute",
                          textAlign: "center",
                          top: "11rem",
                        }}
                      >
                        <h3>Sell Stocks</h3>
                        <span>
                          Invest and track all your stocks in one place.
                        </span>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: "30%",
                          right: "20%",
                          top: "21rem",
                        }}
                      >
                        <Button
                          as={Link}
                          to="/stock/history2"
                          className="history-btn"
                        >
                          Sell Stock
                        </Button>
                      </div>
                    </div>
                  </Grid.Column>
                  <Grid.Column computer={2}></Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="mobile">
        <Stockhistory2Mobile
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

export default StockHistory2;
