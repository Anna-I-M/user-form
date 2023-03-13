import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Modal from "../Modal/Modal";
import styles from "./InputForm.module.css";

const InputFields = (props) => {
  let [enteredUser, setEnteredUser] = useState("");
  let [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState();

  const userChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredAge(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim() === 0) {
      setIsValid(false);
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (enteredUser.trim().length > 0 && Number(enteredAge) < 0) {
      setIsValid(false);
      setError({
        title: "Invalid input",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const formData = {
      id: Math.random().toString(),
      username: enteredUser,
      age: Number(enteredAge),
    };
    console.log(formData);
    props.onAddUser(formData);
    setEnteredUser("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Card className={styles["form-control"]}>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUser}
          onChange={userChangeHandler}
        />
        <br></br>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default InputFields;
