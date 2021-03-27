import React from "react";
import { Form, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { BasicField } from "../components/Basic";
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
        <Field
          component={BasicField}
          id="register-form-email"
          type="email"
          placeholder="E-mail address"
          name="email"
          className="basic-form"
          required
        />
        <Field
          component={BasicField}
          id="register-form-username"
          type="text"
          placeholder="Username"
          name="username"
          className="basic-form"
          required
        />
        <Field
          component={BasicField}
          id="register-form-password"
          type="password"
          placeholder="Password"
          name="password"
          className="basic-form"
          required
        />
        <Field
          component={BasicField}
          id="register-form-confirm"
          type="password"
          placeholder="Confirm Password"
          name="confirm"
          className="basic-form"
          required
        />
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
            Register
          </Button>
        </div>
        <p style={{ textAlign: "center" }}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </Form>
    </main>
  );
}

export default reduxForm({ form: "register" })(Register);
