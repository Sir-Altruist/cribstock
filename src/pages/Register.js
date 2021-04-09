import React from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="register">
      <Form className="reg_form">
        <h2
          style={{
            textAlign: "center",
            padding: "30px 0",
            color: "#132054",
          }}
        >
          Register
        </h2>
        <Grid centered>
          <Form.Input
            id="register-form-email"
            type="email"
            placeholder="E-mail address"
            name="email"
            required
          />
          <Form.Input
            id="register-form-username"
            type="text"
            placeholder="User Name"
            name="username"
            required
          />
          <Form.Input
            id="register-form-password"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <Form.Input
            id="register-form-confirm"
            type="password"
            placeholder="Confirm Password"
            name="password"
            required
          />
        </Grid>
        <Grid>
          <Grid.Column textAlign="center">
            <div className="form-btn-cover">
              <Button type="submit" className="form-btn">
                Register
              </Button>
            </div>
            <p style={{ textAlign: "center", padding: "10px 0 10px 3rem" }}>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </Grid.Column>
        </Grid>
      </Form>
    </main>
  );
}

export default Register;
