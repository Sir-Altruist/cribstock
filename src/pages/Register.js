import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Form, Button, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Form as F, Field } from "react-final-form";
import { CustomInput } from "../components/Basic";
import { signupUser } from "../actions";

function Register({ loggedIn, signupUser }) {
  const history = useHistory();

  useEffect(() => {
    if (loggedIn) history.push("/dashboard/home");
  }, [loggedIn, history]);

  const onSubmit = async (values) => {
    try {
      await signupUser(values);
      history.push("/login");
    } catch (e) {
      // show notification
    }
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
            <Grid>
              <Grid.Column>
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

Register.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (data) => dispatch(signupUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
