import React, { useState } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
import { RenderField } from "../../components/Basic";
import { Field, reduxForm } from "redux-form";
import Sidebar from "../../components/Sidebar";

function Details() {
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
          <section
            style={{
              margin: "120px auto 50px 0px",
            }}
          >
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <h2>Tell us about yourself</h2>
              <p>
                So we can setup your account right. This will only take a few
                minutes.
              </p>
            </div>
            <Form className="details">
              <Field
                component={RenderField}
                id="details-form-first"
                type="text"
                placeholder="First Name"
                name="firstname"
                label="First Name"
                required
              />
              <Field
                component={RenderField}
                id="register-form-last"
                type="text"
                placeholder="Last Name"
                name="lastname"
                label="Last Name"
                required
              />
              <Field
                component={RenderField}
                id="register-form-mobile"
                type="text"
                placeholder="Mobile Number (1)"
                name="text"
                label="Mobile Number"
                required
              />
              <Field
                component={RenderField}
                id="register-form-birth"
                type="date"
                placeholder="Date Of Birth"
                name="birth"
                label="Date of Birth"
              />
              <Field
                component={RenderField}
                id="register-form-address"
                type="text"
                placeholder="Address"
                name="address"
                label="Address"
              />
              <Field
                component={RenderField}
                id="register-form-kin"
                type="text"
                placeholder="Next Of Kin"
                name="kin"
                label="Next Of Kin"
              />
              <Field
                component={RenderField}
                id="register-form-bvn"
                type="text"
                placeholder="BVN"
                name="bvn"
                label="Bank Verification Number(BVN)"
                required
              />
              <Field
                component={RenderField}
                id="register-form-govt"
                type="text"
                name="govt"
                label="Govt ID"
              />
              <div style={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  className="reg-btn"
                  style={{
                    width: "60%",
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

export default reduxForm({ form: "details" })(Details);
