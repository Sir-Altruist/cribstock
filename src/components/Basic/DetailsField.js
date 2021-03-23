import React from "react";
import { Form } from "semantic-ui-react";

const DetailsField = (field) => (
  <div className="details-form">
    <Form.Input {...field.input} {...field} />
    {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
  </div>
);

export default DetailsField;
