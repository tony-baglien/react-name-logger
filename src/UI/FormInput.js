import React from "react";

import "./FormInput.css";

const FormInput = (props) => {
  return (
    <div className="input-container">
      <label>{props.name}</label>
      <input type={props.type}></input>
    </div>
  );
};

export default FormInput;
