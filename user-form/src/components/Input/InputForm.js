import React, { useState } from "react";
import Button from "../UI/Button/Button";
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
    }
    const formSubmitHandler = (event) => {
      event.preventDefault();
      if (enteredUser.trim().length === 0 || enteredAge.trim() === 0) {
          setIsValid(false);
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).'
          })
        return;
      }
      if (enteredUser.trim().length > 0 && Number(enteredAge) < 0){
        setIsValid(false);
        setError({
          title: 'Invalid input',
          message: 'Please enter a valid age (> 0).'
        })
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
      <div>
      {error && <Modal title={error.title} message={error.message} onClose={errorHandler} />}
      <form onSubmit={formSubmitHandler}>
        <div className={styles['form-control']}>
          <label>Username</label>
          <input type="text" value={enteredUser} onChange={userChangeHandler} /><br></br>
          <label>Age (Years)</label>
          <input type="text" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
      </div>
    );
}

export default InputFields;