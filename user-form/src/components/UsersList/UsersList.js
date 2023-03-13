import React from 'react';
import User from '../User/User.js';
import Card from '../UI/Card/Card.js';
import styles from './UserList.module.css';

const UsersList = props => {
    
    return (
      <Card className={styles.list}>
      <ul>
        {props.users.map(user => (
          <User
            key={user.id}
            id={user.id}
          >
            {`${user.username} (${user.age} years old)`}
          </User> ))}
      </ul>
      </Card>
    );
  };
  
  export default UsersList;