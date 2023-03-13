import React from 'react';
import style from './User.module.css';

const User = (props) => {
  return (
    <li className={style.item}>
      {props.children}
    </li>
  );
};

export default User;