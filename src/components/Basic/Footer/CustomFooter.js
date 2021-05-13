import React from "react";
import { Container, Grid, Segment, Image } from "semantic-ui-react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import Logo from "../../../assets/icons/logo1.svg";

function CustomFooter() {
  return (
    <footer>
      <Segment
        vertical
        basic
        style={{
          width: "100%",
          minHeight: "100vh",
          paddingTop: "7rem",
        }}
      >
        <Container>
          <Grid>
            <Grid.Row only="computer">
              {/* <div className="brand-2">
                <Image
                  src={Logo}
                  alt="logo"
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    marginBottom: "1rem",
                    marginRight: "-.5rem",
                  }}
                  avatar
                />
                <span>Cribstock</span>
              </div> */}
              <Image src={Logo} style={{ width: "14rem" }} />
            </Grid.Row>
            <Grid.Row only="computer">
              <Grid.Column computer={3}>
                <Footer1 />
              </Grid.Column>
              <Grid.Column compute={2}></Grid.Column>
              <Grid.Column computer={3}>
                <Footer2 />
              </Grid.Column>
              <Grid.Column compute={2}></Grid.Column>
              <Grid.Column computer={3}>
                <Footer3 />
              </Grid.Column>
              <Grid.Column compute={2}></Grid.Column>
              <Grid.Column computer={3}>
                <Footer4 />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row only="mobile">
              <div className="brand-2">
                <Image
                  src={Logo}
                  alt="logo"
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    marginBottom: "1rem",
                    marginRight: "-.5rem",
                  }}
                  avatar
                />
                <span>Cribstock</span>
              </div>
            </Grid.Row>
            <Grid.Row only="mobile">
              <Grid.Column width={6}>
                <Footer1 />
              </Grid.Column>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={8}>
                <Footer2 />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row only="mobile">
              <Grid.Column width={6}>
                <Footer3 />
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={8}>
                <Footer4 />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </footer>
  );
}

export default CustomFooter;
