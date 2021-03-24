import React from "react";
import { Form, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { RenderField } from "../components/Basic";
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
          component={RenderField}
          id="register-form-email"
          type="email"
          placeholder="E-mail address"
          name="email"
          required
        />
        <Field
          component={RenderField}
          id="register-form-username"
          type="text"
          placeholder="Username"
          name="username"
          required
        />
        <Field
          component={RenderField}
          id="register-form-password"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <Field
          component={RenderField}
          id="register-form-confirm"
          type="password"
          placeholder="Confirm Password"
          name="confirm"
          required
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
