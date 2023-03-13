import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import styles from "./InputForm.module.css";

const InputFields = (props) => {
  let [enteredUser, setEnteredUser] = useState("");
  let [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim() === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (enteredUser.trim().length > 0 && Number(enteredAge) < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const formData = {
      id: Math.random().toString(),
      username: enteredUser,
      age: Number(enteredAge),
    };

    props.onAddUser(formData);
    setEnteredUser("");
    setEnteredAge("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card className={styles["form-control"]}>
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
    </div>
  );
};

export default InputFields;
