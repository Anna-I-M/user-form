import React, { useState } from "react";
import InputForm from "./components/Input/InputForm";
import UsersList from "./components/UsersList/UsersList";
import styles from "./components/Input/InputForm.module.css";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (user) => {
    setUsersList((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        username: user.username,
        age: user.age,
        id: Math.random().toString(),
      });
      console.log(updatedUsers);
      return updatedUsers;
    });
  };
  let content;

  if (usersList.length > 0) {
    content = <UsersList users={usersList} />;
  }
  return (
    <div>
        <section>
          <InputForm onAddUser={addUsersHandler} />
        </section>
        <section className={styles["form-control"]}>{content}</section>
    </div>
  );
}

export default App;
