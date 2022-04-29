import React from "react";
import FormInput from "../UI/FormInput";

import "./FormContainer.css";

const FormContainer = () => {
  return (
    <form className="form-container">
      <FormInput name="Username" type="text" />
      <FormInput name="Age" type="text" />
      <input type="submit" className="form-contianer__submit"></input>
    </form>
  );
};

export default FormContainer;
