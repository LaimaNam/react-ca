import React, { useState, useEffect } from 'react';
import User from './User';

const Users = () => {
  const API = 'https://jsonplaceholder.typicode.com/users';
  // Hooks
  //--state
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  //-- side effects
  useEffect(() => {
    if (!users.length) {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          console.log('Users useEffect: data fetched');
        });
    }

    console.log('Users useEffect: default');
  }, [count, users.length]); //jei idetume users.length tai vel uzsipildytu po visu istrinimo

  //custom functions - react'ui reik atnaujinti UI, nereik kai nori deletint kreiptis i back'a vel
  const deleteUser = (id) => {
    //cia rasomas fetchas kuris siuncia i backa info kad istrintu:
    // fetch("api/users/${id}"), {method: "DELETE"}); <-- sending DELETE request to backend

    //update UI
    const usersAfterDelete = users.filter((user) => user.id !== id);
    setUsers(usersAfterDelete);
  };

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <User user={user} key={user.id} action={deleteUser} />
      ))}
      <button onClick={() => setCount(count + 1)}>Clicked: {count}</button>
    </div>
  );
};

export default Users;
