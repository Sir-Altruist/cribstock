import React, { useState } from "react";
import { Grid, Segment, Search, Icon, Container } from "semantic-ui-react";
import { Head } from "../../components/Stocks";
import Sidebar from "../../components/Sidebar";
import { StocksearchMobile } from "../../components/Mobile";

function StockSearch() {
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
        <Grid.Column width={12}>
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
                    <h2 style={{ color: "#132054" }}>Stocks</h2>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Search placeholder="Search Stock" />
                  </Grid.Column>
                  <Grid.Column width={2}></Grid.Column>
                  <Grid.Column width={4}>
                    <p>
                      <strong>Sort by: Default</strong>{" "}
                      <Icon name="caret down" />
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid style={{ marginTop: "5rem" }}>
                <Grid.Row columns={1}>
                  <Head />
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment
            as="section"
            vertical
            basic
            style={{ margin: "100px auto 10px 0" }}
          >
            <Container>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <h2 style={{ color: "#132054" }}>Stocks</h2>
                  </Grid.Column>
                  <div style={{ display: "flex", marginTop: "2rem" }}>
                    <Search placeholder="Search Stock" />
                    <p style={{ paddingLeft: "1rem" }}>
                      <strong>Sort by: Default</strong>{" "}
                      <Icon name="caret down" />
                    </p>
                  </div>
                </Grid.Row>
              </Grid>
              <Grid style={{ marginTop: "5rem" }}>
                <Grid.Row columns={1}>
                  <Head />
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="mobile">
        <StocksearchMobile
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

export default StockSearch;
