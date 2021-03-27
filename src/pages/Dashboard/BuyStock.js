import React, { useState } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { RenderField } from "../../components/Basic";
import { Field, reduxForm } from "redux-form";
import Sidebar from "../../components/Sidebar";

function BuyStock() {
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
              Buy Stock
            </h2>
            <Form className="details">
              <Field
                component={RenderField}
                id="buy-form-range"
                type="text"
                name="range"
                label="Stock Price Range"
              />
              <Field
                component={RenderField}
                id="buy-form-quantity"
                type="text"
                placeholder="0.00"
                name="quantity"
                label="Quantity"
              />
              <Field
                component={RenderField}
                id="buy-form-dividend"
                type="text"
                placeholder="%"
                name="dividend"
                label="Minimum Dividend Yield"
              />
              <Field
                component={RenderField}
                id="buy-form-appreciation"
                type="text"
                placeholder="%"
                name="appreciation"
                label="Minimum stock appreciation/yr"
              />
              <Field
                component={RenderField}
                id="buy-form-location"
                type="text"
                placeholder="e.g lagos"
                name="location"
                label="Location"
              />
              <Field
                component={RenderField}
                id="buy-form-type"
                type="text"
                placeholder="e.g Office Complex"
                name="type"
                label="Stock Type"
              />
              <Field
                component={RenderField}
                id="buy-form-price"
                type="text"
                placeholder="0.0000"
                name="price"
                label="Stock Price"
              />
              <div style={{ paddingLeft: "3rem", marginTop: "2rem" }}>
                <Button
                  type="submit"
                  className="reg-btn"
                  style={{
                    width: "63%",
                    backgroundColor: "#3861FB",
                    color: "#ffffff",
                  }}
                >
                  Buy Stock
                </Button>
              </div>
            </Form>
          </section>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default reduxForm({ form: "buyStock" })(BuyStock);
