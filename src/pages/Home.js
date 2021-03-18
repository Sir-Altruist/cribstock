import React from "react";
import { Segment, Container } from "semantic-ui-react";
import { CustomFooter } from "../components/Basic";

function Home() {
  return (
    <>
      <main>
        <Segment as="section" basic id="section-1" vertical>
          <Container></Container>
        </Segment>
        <Segment as="section" basic id="section-2" vertical>
          <Container></Container>
        </Segment>
        <Segment as="section" basic id="section-3" vertical>
          <Container></Container>
        </Segment>
        <Segment as="section" basic id="section-4" vertical>
          <Container></Container>
        </Segment>
      </main>
      <CustomFooter />
    </>
  );
}

export default Home;
