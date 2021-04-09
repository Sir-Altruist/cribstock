import React from "react";
import { Form, Button, Checkbox, Grid } from "semantic-ui-react";
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
        <Grid centered>
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
              <Button
                type="submit"
                className="form-btn"
                as={Link}
                to="/dashboard/index"
              >
                Login
              </Button>
            </div>
            <p style={{ textAlign: "center", padding: "10px 0 10px 3rem" }}>
              Do not have an account? <Link to="/register">Register</Link>
            </p>
          </Grid.Column>
        </Grid>
      </Form>
    </main>
  );
}

export default Login;
