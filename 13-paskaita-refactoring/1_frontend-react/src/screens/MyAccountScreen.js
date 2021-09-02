import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from './../App';

const MyAccountScreen = () => {
  // -- API URL
  const GET_USER_URI = 'http://localhost:5000/api/users/';
  const ADD_CAR_URI = 'http://localhost:5000/api/cars/add/';
  const DELETE_CAR_URI = 'http://localhost:5000/api/cars/delete/';

  // -- HOOKS
  // -- -- global state
  const { dispatch } = useContext(UserContext);

  // -- -- local state
  const [userToShow, setUserToShow] = useState('');
  const [userId, setUserId] = useState('');
  const [newCar, setNewCar] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
  });

  // -- redirects
  const history = useHistory();

  // -- side effects
  useEffect(() => {
    let userIdFromLocalStorage = localStorage.getItem('user');
    console.log(
      'useEffect: getting id from local storage',
      userIdFromLocalStorage
    );
    setUserId(userIdFromLocalStorage);
    return axios
      .get(GET_USER_URI + userIdFromLocalStorage)
      .then((user) => {
        setUserToShow(user.data);
        console.log('fetched data', user.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // -- CUSTOM FUNCTIONS

  // -- -- creating new car advert
  const addNewCar = (e) => {
    e.preventDefault();
    console.log(newCar);
    axios
      .put(ADD_CAR_URI + userId, newCar)
      .then(() => {
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  // -- -- loging out user (on button click)
  const logoutUser = () => {
    dispatch({ type: 'LOGOUT', user: '' });
    localStorage.removeItem('user');
    history.push('/login');
  };

  // -- -- deleting a car
  const deleteCar = (carId) => {
    axios.delete(DELETE_CAR_URI + carId).then(() => {
      window.location.reload(false);
    });
  };

  // -------- RENDERING
  return (
    <main>
      <h2>Your profile</h2>
      <h2>Hey, {userToShow.name}</h2>
      <div>
        <p>&#128025;</p>
        <p>
          {userToShow.name} {userToShow.surname}
        </p>
        <p>{userToShow.email}</p>
        <p>{userToShow.cars ? userToShow.cars.length : 0}</p>

        <button onClick={() => logoutUser()}>Logout</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userToShow.cars ? (
              userToShow.cars.map((car) => (
                <tr key={car._id}>
                  <td>{car.make}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                  <td>${car.price}</td>
                  <td>
                    <button onClick={() => deleteCar(car._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No cars to show</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
        <form>
          <input
            type="text"
            value={newCar.make}
            onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
            placeholder="make"
          />
          <input
            type="text"
            value={newCar.model}
            onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
            placeholder="model"
          />
          <input
            type="text"
            value={newCar.year}
            onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
            placeholder="year"
          />
          <input
            type="text"
            value={newCar.price}
            onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
            placeholder="price"
          />
          <button onClick={addNewCar}>Add new car</button>
        </form>
      </div>
    </main>
  );
};

export default MyAccountScreen;
