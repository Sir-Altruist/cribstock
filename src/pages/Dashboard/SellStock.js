import React, { useState } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { RenderField } from "../../components/Basic";
import { Field, reduxForm } from "redux-form";
import Sidebar from "../../components/Sidebar";

function SellStock() {
  const [activeItem, setActiveItem] = useState("portfolio");
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
    </Grid>
  );
}

export default reduxForm({ form: "sellStock" })(SellStock);
