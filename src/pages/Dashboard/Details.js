import React, { useState } from "react";
import { Grid, Button, Form } from "semantic-ui-react";
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
            <div style={{ padding: "20px 0 10px 3rem" }}>
              <h2>Tell us about yourself</h2>
              <p>
                So we can setup your account right. This will only take a few
                minutes.
              </p>
            </div>
            <Form>
              <Form.Input
                id="details-form-first"
                type="text"
                placeholder="First Name"
                name="firstname"
                label="First Name"
                required
              />
              <Form.Input
                id="register-form-last"
                type="text"
                placeholder="Last Name"
                name="lastname"
                label="Last Name"
                required
              />
              <Form.Input
                id="register-form-mobile"
                type="text"
                placeholder="Mobile Number (1)"
                name="text"
                label="Mobile Number"
                required
              />
              <Form.Input
                id="register-form-birth"
                type="date"
                placeholder="Date Of Birth"
                name="birth"
                label="Date of Birth"
              />
              <Form.Input
                id="register-form-address"
                type="text"
                placeholder="Address"
                name="address"
                label="Address"
              />
              <Form.Input
                id="register-form-kin"
                type="text"
                placeholder="Next Of Kin"
                name="kin"
                label="Next Of Kin"
              />
              <Form.Input
                id="register-form-bvn"
                type="text"
                placeholder="BVN"
                name="bvn"
                label="Bank Verification Number(BVN)"
                required
              />
              <Form.Input
                id="register-form-govt"
                type="text"
                name="govt"
                label="Govt ID"
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
    </Grid>
  );
}

export default Details;
