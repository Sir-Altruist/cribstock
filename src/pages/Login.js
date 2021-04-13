import React from "react";
import { Form, Button, Checkbox, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Form as F, Field } from "react-final-form";
import { CustomInput } from "../components/Basic";

function Login() {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.username = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
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
              Sign In
            </h2>
            <Grid centered>
              <Grid.Column textAlign="center">
                <Field
                  component={CustomInput}
                  id="register-form-username"
                  type="text"
                  placeholder="User Name"
                  name="username"
                  required
                />
                <Field
                  component={CustomInput}
                  id="register-form-password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </Grid.Column>
            </Grid>
            <div className="login-texts">
              <Checkbox label="Keep me signed in" />
              <Link to="/" className="pass">
                Forgot Password?
              </Link>
            </div>
            <Grid>
              <Grid.Column textAlign="center">
                <div className="form-btn-cover">
                  <Button type="submit" className="form-btn">
                    Login
                  </Button>
                </div>
                <p style={{ textAlign: "center", padding: "10px 0 10px 3rem" }}>
                  Do not have an account? <Link to="/register">Register</Link>
                </p>
              </Grid.Column>
            </Grid>
          </Form>
        )}
      />
    </main>
  );
}

export default Login;
