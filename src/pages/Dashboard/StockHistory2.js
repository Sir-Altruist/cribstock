import React, { useState } from "react";
import { Container, Grid, Segment, Image, Button } from "semantic-ui-react";
import Chart from "../../assets/icons/chart.svg";
import Sidebar from "../../components/Sidebar";

function StockHistory2() {
  const [activeItem, setActiveItem] = useState("stock");
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
                        <Button color="blue">Sell Stock</Button>
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
                  {/* <Grid.Column computer={5}>
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
                        <Button color="blue">Sell Stock</Button>
                      </div>
                    </div>
                  </Grid.Column> */}
                  {/* <Grid.Column computer={2}></Grid.Column> */}
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default StockHistory2;
