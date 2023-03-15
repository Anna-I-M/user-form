import React, { useState, Fragment } from "react";
import InputForm from "./components/Input/InputForm";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (userName, userAge) => {
    setUsersList((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        username: userName,
        age: userAge,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  let content;
  if (usersList.length > 0) {
    content = <UsersList users={usersList} />;
  }

  return (
    <Fragment>
        <InputForm onAddUser={addUsersHandler} />
        {content}
    </Fragment>
  );
}

export default App;
