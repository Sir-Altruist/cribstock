import React from "react";
import {
  Segment,
  Container,
  Image,
  Grid,
  Button,
  Header,
  Input,
} from "semantic-ui-react";
import { CustomFooter } from "../components/Basic";
import { Link } from "react-router-dom";
import Realtor from "../assets/icons/realtor.svg";
import { Head } from "../components/Stocks";
import { Property } from "../components/Property";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Houses from "../assets/icons/houses.svg";

function Home({ properties }) {
  return (
    <>
      <main>
        <Segment as="section" basic id="section-1" vertical>
          <Container>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={10} only="computer">
                  <h1
                    style={{
                      fontWeight: "700",
                      fontSize: "50px",
                      lineHeight: "75px",
                      display: "flex",
                      alignItems: "center",
                      color: "#132054",
                    }}
                  >
                    Buy Commercial Properties in Stocks
                  </h1>
                  <p
                    style={{
                      color: "#0B1332",
                    }}
                  >
                    Massa tempor nec feugiat nisl pretium. Egestas fringilla
                    <br />
                    phasellus faucibus scelerisque eleifend donec. Porta nibh
                    vene
                    <br /> natis cras sed felis eget velit aliquet.
                  </p>
                  <Button
                    style={{
                      backgroundColor: "#3861FB",
                      color: "#ffffff",
                    }}
                    as={Link}
                    to="/"
                  >
                    Get Started
                  </Button>
                </Grid.Column>
                <Grid.Column width={16} only="mobile">
                  <h1
                    style={{
                      fontWeight: "700",
                      fontSize: "30px",
                      display: "flex",
                      color: "#132054",
                    }}
                  >
                    Buy Commercial Properties in Stocks
                  </h1>
                  <p
                    style={{
                      color: "#0B1332",
                    }}
                  >
                    Massa tempor nec feugiat nisl pretium. Egestas fringilla
                    <br />
                    phasellus faucibus scelerisque eleifend donec. Porta nibh
                    vene
                    <br /> natis cras sed felis eget velit aliquet.
                  </p>
                  <Button
                    style={{
                      backgroundColor: "#3861FB",
                      color: "#ffffff",
                    }}
                    as={Link}
                    to="/"
                  >
                    Get Started
                  </Button>
                </Grid.Column>
                <Grid.Column computer={6} mobile={16}>
                  <Image src={Realtor} alt="realtor" className="realtor" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Segment as="section" basic id="section-2" vertical>
          <Container>
            <Head />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                centered
                style={{
                  backgroundColor: "#3861FB",
                  marginTop: "2rem",
                  marginBottom: "5rem",
                }}
              >
                <Link centered to="/" style={{ color: "white" }}>
                  Explore Stocks
                </Link>
              </Button>
            </div>
          </Container>
        </Segment>
        <Segment as="section" basic id="section-3" vertical>
          <Container>
            <Header
              as="h1"
              style={{
                color: "#132054",
                textAlign: "center",
              }}
            >
              How Cribstock Works
            </Header>
            <Grid centered>
              <Grid.Row>
                <Grid.Column computer={9} mobile={16}>
                  <p style={{ textAlign: "center" }}>
                    Massa tempor nec feugiat nisl pretium. Egestas fringilla
                    phasellus faucibus scelerisque eleifend donec. Porta nibh
                    vene natis cras sed felis eget velit aliquet.
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                {properties &&
                  properties.length &&
                  properties.map((property, i) => {
                    return (
                      <Grid.Column computer={5} mobile={16} key={i}>
                        <Property property={property} />
                      </Grid.Column>
                    );
                  })}
              </Grid.Row>
            </Grid>
            <Grid>
              <Grid.Row columns={2} only="computer">
                <section className="property_card">
                  <div style={{ paddingTop: "5rem", paddingLeft: "7rem" }}>
                    <h2 style={{ color: "white" }}>
                      Enlist your properties for sale on Cribstock
                    </h2>
                    <p style={{ color: "white" }}>
                      Massa tempor nec feugiat nisl pretium. Egestas fringilla
                      phasellus faucibus scelerisque eleifend donec. Porta nibh
                    </p>
                    <Button color="white">
                      <Link to="/" style={{ color: "black" }}>
                        Link your property
                      </Link>
                    </Button>
                  </div>
                  <Image
                    src={Houses}
                    alt="houses"
                    style={{
                      width: "47rem",
                      marginTop: "15rem",
                      marginBottom: "-.2rem",
                      marginRight: "-.9rem",
                    }}
                  />
                </section>
              </Grid.Row>
              <Grid.Row columns={1} only="mobile">
                <section className="property_card_2">
                  <div style={{ paddingTop: "5rem", textAlign: "center" }}>
                    <h2 style={{ color: "white" }}>
                      Enlist your properties for sale on Cribstock
                    </h2>
                    <p style={{ color: "white" }}>
                      Massa tempor nec feugiat nisl pretium. Egestas fringilla
                      phasellus faucibus scelerisque eleifend donec. Porta nibh
                    </p>
                    <Button color="white">
                      <Link to="/" style={{ color: "black" }}>
                        Link your property
                      </Link>
                    </Button>
                  </div>
                  <Image
                    src={Houses}
                    alt="houses"
                    style={{
                      width: "40rem",
                      marginTop: "5rem",
                      marginBottom: "-.2rem",
                    }}
                  />
                </section>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Segment as="section" basic id="section-4" vertical>
          <Container>
            <Header
              as="h1"
              style={{
                color: "#132054",
                textAlign: "center",
              }}
            >
              Email NewsLetter
            </Header>
            <p style={{ textAlign: "center" }}>
              Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus
              faucibus scelerisque
            </p>
            <div style={{ marginTop: "5rem" }}>
              <Input
                type="email"
                name="email"
                placeholder="enter your email address"
                action={{
                  color: "blue",
                  content: "Send",
                }}
                fluid
              />
            </div>
          </Container>
        </Segment>
      </main>
      <CustomFooter />
    </>
  );
}

Home.propTypes = {
  properties: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    properties: state.properties.data,
  };
};

export default connect(mapStateToProps)(Home);
