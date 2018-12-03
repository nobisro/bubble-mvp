import React from "react";
import Form from "./Form.jsx";

export default function Header(props) {
  return (
    <div className="">
      <Form
        handleChange={props.handleChange}
        handleSave={props.handleSave}
        clearAll={props.clearAll}
      />
    </div>
  );
}
