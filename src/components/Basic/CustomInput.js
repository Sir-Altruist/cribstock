import React from "react";
import { Form } from "semantic-ui-react";

const CustomInput = (props) => (
  <>
    <Form.Input {...props.input} {...props} />
    {props.meta.touched && props.meta.error && (
      <div>
        <small>{props.meta.error}</small>
      </div>
    )}
  </>
);

export default CustomInput;
