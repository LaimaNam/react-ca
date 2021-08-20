import React, { useEffect } from 'react';

const User = ({ user, action }) => {
  //Hooks
  // -- side effects
  useEffect(() => {
    console.log(' ----- User useEffect');
    return () => {
      console.log('user removed: ' + user.id);
    };
  }, [user]);

  return (
    <ul>
      <li>
        {user.name} {user.surname}
      </li>
      <li>{user.email}</li>
      <li>
        {user.address.street}, {user.address.city}
      </li>
      <li>{user.phone}</li>
      <li>
        <button onClick={() => action(user.id)}>Delete user</button>
      </li>
    </ul>
  );
};

export default User;
