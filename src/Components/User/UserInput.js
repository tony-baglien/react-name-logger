import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModule";

import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const usernameInputHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age > 0)",
      });
      return;
    }

    props.onAddUser(username, age);
    setUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form className={classes.input} onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={usernameInputHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageInputHandler}
          />
          <Button type="submit">Submit </Button>
        </form>
      </Card>
    </>
  );
};

export default UserInput;
