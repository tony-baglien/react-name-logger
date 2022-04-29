import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./UserInput.module.css";

const UserInput = () => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");

  const usernameInputHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    console.log(age, username);
    event.preventDefault();
    if (username.length === 0) {
      console.log("Please enter a username");
      return;
    }
    if (age < 0) {
      console.log("Please enter a valid age (>0");
      return;
    }
  };

  return (
    <Card>
      <form className={classes.input} onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={usernameInputHandler} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" onChange={ageInputHandler} />
        <Button type="submit" text="Submit Form" />
      </form>
    </Card>
  );
};

export default UserInput;
