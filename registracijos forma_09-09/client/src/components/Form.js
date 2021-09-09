import React, { useState, useEffect } from 'react';

const Form = () => {
  // hooks
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    surname: '',
    email: '',
    birthYear: '',
  });
  const [loaded, setLoaded] = useState(false);

  //side effects
  useEffect(() => {
    if (!loaded) {
      setUsers(JSON.parse(localStorage.getItem('users')) || []);
      setLoaded(true);
    } else {
      localStorage.setItem('users', JSON.stringify([...users]));
    }
  }, [loaded, users]);

  //custom functions
  const registerUser = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);

    console.log('onclick', newUser);

    setNewUser({
      name: '',
      surname: '',
      email: '',
      birthYear: '',
    });
  };

  return (
    <main>
      <h2>Registracijos forma</h2>
      <form onSubmit={registerUser}>
        <div>
          <label htmlFor="name">Vardas</label>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="surname">Pavardė</label>
          <input
            type="text"
            name="surname"
            value={newUser.surname}
            onChange={(e) =>
              setNewUser({ ...newUser, surname: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">El.paštas</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="birthYear">Gimimo metai</label>
          <input
            type="text"
            name="birthYear"
            value={newUser.birthYear}
            onChange={(e) =>
              setNewUser({ ...newUser, birthYear: e.target.value })
            }
          />
        </div>

        <input type="submit" value="Registruotis" />
      </form>
      <p></p>
      <div>
        {users && users.length !== 0 ? (
          <table>
            <thead>
              <tr>
                <th>Vardas</th>
                <th>Pavardė</th>
                <th>El.paštas</th>
                <th>Gimimo metai</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.surname}>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.email}</td>
                  <td>{user.birthYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No registered users to show</p>
        )}
      </div>
    </main>
  );
};

export default Form;
