import React, { useState } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { SellstockMobile } from "../../components/Mobile";
import Sidebar from "../../components/Sidebar";

function SellStock() {
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
          <Sidebar activeItem={activeItem} handleClick={handleClick} />
        </Grid.Column>
        <Grid.Column width={12}>
          <section
            style={{
              margin: "120px auto 50px 0px",
            }}
          >
            <h2 style={{ color: "#132054", padding: "20px 0 10px 3rem" }}>
              Sell Stock
            </h2>
            <Form className="details">
              <Form.Input
                id="sell-form-stock"
                type="text"
                name="stock"
                label="Stock"
              />
              <Form.Input
                id="sell-form-quantity"
                type="text"
                placeholder="0.00"
                name="quantity"
                label="Quantity"
              />
              <Form.Input
                id="sell-form-price"
                type="text"
                placeholder="$0.0000"
                name="price"
                label="Price Per Stock"
              />
              <Form.Input
                id="sell-form-total"
                type="text"
                placeholder="$0.0000"
                name="total"
                label="Total Price"
              />
              <div style={{ paddingLeft: "3rem", marginTop: "2rem" }}>
                <Button type="submit" className="details-btn">
                  Sell Stock
                </Button>
              </div>
            </Form>
          </section>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="mobile">
        <SellstockMobile
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

export default SellStock;
