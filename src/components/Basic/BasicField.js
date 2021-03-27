import React from "react";
import { Form } from "semantic-ui-react";

const BasicField = (field) => (
  <div>
    <Form.Input {...field.input} {...field} />
    {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
  </div>
);

export default BasicField;
