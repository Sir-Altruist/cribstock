import React, { useState } from "react";
import { Grid, Segment, Search, Icon, Container } from "semantic-ui-react";
import { Head } from "../../components/Stocks";
import Sidebar from "../../components/Sidebar";

function StockSearch() {
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
              <Grid centered>
                <Grid.Row>
                  <Grid.Column computer={6}>
                    <h2 style={{ color: "#132054" }}>Stocks</h2>
                  </Grid.Column>
                  <Grid.Column computer={4}>
                    <Search placeholder="Search Stock" />
                  </Grid.Column>
                  <Grid.Column computer={2}></Grid.Column>
                  <Grid.Column computer={4}>
                    <p>
                      Sort by: Default <Icon name="caret down" />
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
      </Grid.Row>
    </Grid>
  );
}

export default StockSearch;
