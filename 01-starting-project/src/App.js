import React, { useState } from "react";
import InputForm from "./components/Input/InputForm";
import UsersList from "./components/UsersList/UsersList";
import Card from "./components/UI/Card/Card";
import styles from "./components/Input/InputForm.module.css";
import style from "./App.module.css";

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
      <Card className={style.container}>
        <section>
          <InputForm onAddUser={addUsersHandler} />
        </section>
      </Card>
        <section className={styles["form-control"]}>{content}</section>
    </div>
  );
}

export default App;
