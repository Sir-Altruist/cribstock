import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import Footer5 from "./Footer5";

function CustomFooter() {
  return (
    <footer
      style={{
        paddingTop: "50px",
        paddingBottom: "150px",
      }}
    >
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column computer={6}>
              <Footer1 />
            </Grid.Column>
            <Grid.Column computer={3}>
              <Footer2 />
            </Grid.Column>
            <Grid.Column computer={3}>
              <Footer3 />
            </Grid.Column>
            <Grid.Column computer={2}>
              <Footer4 />
            </Grid.Column>
            <Grid.Column computer={2}>
              <Footer5 />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </footer>
  );
}

export default CustomFooter;
