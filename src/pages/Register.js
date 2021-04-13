import React from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Form as F, Field } from "react-final-form";
import { CustomInput } from "../components/Basic";

function Register() {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.username = "Email is required";
    }
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.confirm) {
      errors.confirm = "Confirm password is required";
    } else if (values.confirm !== values.password) {
      errors.confirm = "Password must match";
    }
    return errors;
  };

  return (
    <main className="register">
      <F
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <Form className="reg_form" onSubmit={handleSubmit}>
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
              <Grid.Column textAlign="center">
                <Field
                  component={CustomInput}
                  id="register-form-email"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
                <Field
                  component={CustomInput}
                  id="register-form-username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                <Field
                  component={CustomInput}
                  id="register-form-password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <Field
                  component={CustomInput}
                  id="register-form-confirm"
                  type="password"
                  name="confirm"
                  placeholder="Confirm Password"
                  required
                />
              </Grid.Column>
            </Grid>
            <Grid>
              <Grid.Column textAlign="center">
                <div className="form-btn-cover">
                  <Button type="submit" className="form-btn">
                    Register
                  </Button>
                </div>
                <p style={{ textAlign: "center", padding: "10px auto" }}>
                  Already have an account? <Link to="/login">Log in</Link>
                </p>
              </Grid.Column>
            </Grid>
          </Form>
        )}
      />
    </main>
  );
}

export default Register;
