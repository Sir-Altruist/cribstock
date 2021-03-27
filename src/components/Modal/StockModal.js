import React from "react";
import { Modal, Segment, Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function StockModal({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose} onOpen={open} size="small">
      <Modal.Header>
        <p
          style={{
            position: "absolute",
            right: "1rem",
            top: ".7rem",
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          X
        </p>
      </Modal.Header>
      <Modal.Content>
        <Segment as="section" vertical basic>
          <Container>
            <Header>
              <h2 style={{ paddingLeft: "2rem" }}>Do you want to?</h2>
            </Header>
            <div
              style={{
                width: "85%",
                minHeight: "8rem",
                backgroundColor: "#F8FAFD",
                borderRadius: "8px",
                display: "flex",
                marginLeft: "2rem",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  backgroundColor: "#C4C4C4",
                  borderRadius: "50%",
                  marginTop: "2.5rem",
                  marginLeft: "3rem",
                }}
              ></div>
              <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                <Link to="/portfolio/buystock">
                  <h3 style={{ color: "#2F2F2F" }}>Explore Stocks</h3>
                </Link>
                <p>Browse and invest in your various properties</p>
              </div>
            </div>
          </Container>
        </Segment>
        <Segment
          as="section"
          vertical
          basic
          style={{ margin: "0 auto 50px 50px" }}
        >
          <Container>
            <div
              style={{
                width: "90%",
                minHeight: "8rem",
                backgroundColor: "#F8FAFD",
                borderRadius: "8px",
                display: "flex",
                marginLeft: "-1rem",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  backgroundColor: "#C4C4C4",
                  borderRadius: "50%",
                  marginTop: "2.5rem",
                  marginLeft: "3rem",
                }}
              ></div>
              <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                <Link to="/portfolio/sellstock">
                  <h3 style={{ color: "#2F2F2F" }}>Sell Stocks</h3>
                </Link>
                <p>Sell your already owned stocks </p>
              </div>
            </div>
          </Container>
        </Segment>
      </Modal.Content>
    </Modal>
  );
}

export default StockModal;
