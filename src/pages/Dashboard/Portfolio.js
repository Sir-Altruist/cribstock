import React, { useState } from "react";
import { Grid, Segment, Button, Container } from "semantic-ui-react";
import { Head2 } from "../../components/Stocks";
import Sidebar from "../../components/Sidebar";
import { StockModal } from "../../components/Modal";
import { PortfolioMobile } from "../../components/Mobile";

function Portfolio() {
  const [activeItem, setActiveItem] = useState("portfolio");
  const handleClick = (e, { name }) => {
    setActiveItem(name);
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [activeBtn, setActiveBtn] = useState("Purchases");
  const changeFocus = (e, { name }) => {
    setActiveBtn(name);
  };
  const [visible, setVisible] = useState(false);
  const visibilityToggle = () => setVisible(!visible);
  const cancelSidebar = () => setVisible(false);
  return (
    <>
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
                <Grid centered>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <h2 style={{ color: "#132054" }}>Portfolio</h2>
                    </Grid.Column>
                    <Grid.Column width={5}></Grid.Column>
                    <Grid.Column width={5} className="sell-buy">
                      <Button
                        // color="blue"
                        onClick={() => setOpen(true)}
                        className="first-btn"
                      >
                        Buy/Sell Stock
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <section className="portfolio-container">
                  <div>
                    <span className="tpv">Total Portfolio Value</span>
                    <h4 style={{ textAlign: "center" }}>
                      <span>&#x20A6;30,000,000</span>
                    </h4>
                  </div>
                  <div>
                    <span>(30d - 1y) change</span>
                    <h4 style={{ color: "#12A672", textAlign: "center" }}>
                      +9.0%
                    </h4>
                  </div>
                  <div>
                    <span className="stock">No of stocks</span>
                    <h4 style={{ textAlign: "center" }}>3000</h4>
                  </div>
                  <div>
                    <span>Dividends</span>
                    <h4 style={{ textAlign: "center" }}>
                      <span>&#x20A6;3000</span>
                    </h4>
                  </div>
                  <div>
                    <span>Purchased</span>
                    <h4 style={{ textAlign: "center" }}>1500</h4>
                  </div>
                  <div>
                    <span>Sold</span>
                    <h4>1500</h4>
                  </div>
                </section>
                <section
                  style={{
                    width: "86%",
                    height: "3.5rem",
                    border: "1px solid #F0F2F5",
                    backgroundColor: "#F0F2F5",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button.Group
                    style={{
                      width: "99%",
                      height: "3rem",
                      paddingTop: ".2rem",
                    }}
                  >
                    <Button
                      compact
                      active={activeBtn === "Purchases"}
                      name="Purchases"
                      onClick={changeFocus}
                      style={{
                        width: "50%",
                      }}
                    >
                      Purchased
                    </Button>
                    <Button
                      compact
                      active={activeBtn === "Sales"}
                      name="Sales"
                      onClick={changeFocus}
                      style={{
                        width: "50%",
                      }}
                    >
                      Sold
                    </Button>
                  </Button.Group>
                </section>
                <Grid style={{ marginTop: "5rem" }}>
                  <Grid.Row columns={1}>
                    <Head2 />
                  </Grid.Row>
                </Grid>
              </Container>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only="mobile">
          <PortfolioMobile
            activeItem={activeItem}
            visible={visible}
            visibilityToggle={visibilityToggle}
            handleClick={handleClick}
            cancelSidebar={cancelSidebar}
          />
        </Grid.Row>
      </Grid>
      <StockModal open={open} handleClose={handleClose} />
    </>
  );
}

export default Portfolio;
