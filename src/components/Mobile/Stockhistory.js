import React from "react";
import {
  Button,
  Menu,
  Sidebar,
  Grid,
  Segment,
  Image,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Chart from "../../assets/icons/chart.svg";
import Shop from "../../assets/icons/shop.svg";

function StockhistoryMobile({
  activeItem,
  handleClick,
  visible,
  visibilityToggle,
  cancelSidebar,
}) {
  return (
    <React.Fragment>
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
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#E41111",
                        textAlign: "center",
                      }}
                    >
                      -9.0%
                    </p>
                  </div>
                  <div>
                    <p style={{ textAlign: "center" }}>1y</p>
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
                    <p style={{ paddingRight: "1rem" }}>Volume (24hrs)</p>
                    <p style={{ fontWeight: "bold" }}>
                      <span>&#x20A6;3.8M</span>
                    </p>
                    <small>500</small>
                  </div>
                  <div>
                    <p style={{ textAlign: "center" }}>Circulating Supply</p>
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
                      -The developer aims to have all bookings completed within
                      3 months;
                    </li>
                    <li style={{ paddingTop: ".5rem" }}>
                      -Construction has already started;
                    </li>
                    <li style={{ paddingTop: ".5rem" }}>
                      -Smart and sustainable building that will integrate solar
                      energy and energy efficiency;
                    </li>
                    <li style={{ paddingTop: ".5rem" }}>
                      -The scoring for this opportunity is BBB.
                    </li>
                  </ul>
                </div>
                <div style={{ padding: "3rem 0" }}>
                  <h3>Location</h3>
                  <p>
                    The project is located in Montcada, a town of Catalonia, in
                    the Vallès Occidental region, 12 km from Barcelona.
                  </p>
                </div>
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
                    <h3>Buy Stocks</h3>
                    <span style={{ padding: "0 .5rem" }}>
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
                      className="history-btn"
                      as={Link}
                      size="tiny"
                      to="/portfolio/buystock"
                    >
                      Buy Stock
                    </Button>
                  </div>
                </div>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
}
export default StockhistoryMobile;
