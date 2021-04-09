import React, { useState } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import Sidebars from "../../components/Sidebar";
import { BuystockMobile } from "../../components/Mobile";

function BuyStock() {
  const [activeItem, setActiveItem] = useState("portfolio");
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
          <Sidebars activeItem={activeItem} handleClick={handleClick} />
        </Grid.Column>
        <Grid.Column width={12}>
          <section
            style={{
              margin: "120px auto 50px 0px",
            }}
          >
            <h2 style={{ color: "#132054", padding: "20px 0 10px 3rem" }}>
              Buy Stock
            </h2>
            <Form className="details">
              <Form.Input
                id="buy-form-range"
                type="text"
                name="range"
                label="Stock Price Range"
              />
              <Form.Input
                id="buy-form-quantity"
                type="text"
                placeholder="0.00"
                name="quantity"
                label="Quantity"
              />
              <Form.Input
                id="buy-form-dividend"
                type="text"
                placeholder="%"
                name="dividend"
                label="Minimum Dividend Yield"
              />
              <Form.Input
                id="buy-form-appreciation"
                type="text"
                placeholder="%"
                name="appreciation"
                label="Minimum stock appreciation/yr"
              />
              <Form.Input
                id="buy-form-location"
                type="text"
                placeholder="e.g lagos"
                name="location"
                label="Location"
              />
              <Form.Input
                id="buy-form-type"
                type="text"
                placeholder="e.g Office Complex"
                name="type"
                label="Stock Type"
              />
              <Form.Input
                id="buy-form-price"
                type="text"
                placeholder="₦0.0000"
                name="price"
                label="Stock Price"
              />
              <div style={{ paddingLeft: "3rem", marginTop: "2rem" }}>
                <Button type="submit" className="details-btn">
                  Buy Stock
                </Button>
              </div>
            </Form>
          </section>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="mobile" width={16}>
        <BuystockMobile
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

export default BuyStock;
