import React from "react";
import { Form, Button, Checkbox, Grid } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { RenderField } from "../components/Basic";
import { Link } from "react-router-dom";

function Login() {
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
          Sign In
        </h2>
        <Field
          component={RenderField}
          id="register-form-username"
          type="text"
          placeholder="Username"
          name="username"
          required
          className="field"
        />
        <Field
          component={RenderField}
          id="register-form-password"
          type="password"
          placeholder="Password"
          name="password"
          required
          className="field"
        />
        <Grid>
          <Grid.Row>
            <Grid.Column computer={3}></Grid.Column>
            <Grid.Column computer={4}>
              <Checkbox label="keep me signed in" />
            </Grid.Column>
            <Grid.Column computer={2}></Grid.Column>
            <Grid.Column computer={5}>
              <p style={{ paddingLeft: "2.5rem" }}>Forgot Password?</p>
            </Grid.Column>
            <Grid.Column computer={2}></Grid.Column>
          </Grid.Row>
        </Grid>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Button
            type="submit"
            className="reg-btn"
            style={{
              width: "60%",
              backgroundColor: "#3861FB",
              color: "#ffffff",
            }}
          >
            Login
          </Button>
        </div>
        <p style={{ textAlign: "center" }}>
          Do not have an account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </main>
  );
}

export default reduxForm({ form: "login" })(Login);
