import '../styles/2_utilities.css';
import '../styles/4_my-account.css';
import axios from 'axios';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from './../App';

// -- API URL
const GET_USER_URI = 'http://localhost:5000/api/users/';
const ADD_CAR_URI = 'http://localhost:5000/api/cars/add/';
const DELETE_CAR_URI = 'http://localhost:5000/api/cars/delete/';

const getData = (userId, setUserToShow) => {
  return axios
    .get(GET_USER_URI + userId)
    .then((user) => {
      setUserToShow(user.data);
      // console.log('fetched data', user.data);
    })
    .catch((err) => console.log(err));
};

//component
const MyAccountScreen = () => {
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

  const [formErrorMsg, setFormErrorMsg] = useState('');

  // refs
  const AddCarFormRef = useRef();

  // -- redirects
  const history = useHistory();

  // -- side effects
  useEffect(() => {
    let userIdFromLocalStorage = localStorage.getItem('user');
    setUserId(userIdFromLocalStorage);
    getData(userIdFromLocalStorage, setUserToShow);
  }, []);

  // -- CUSTOM FUNCTIONS
  // -- -- creating new car advert
  const addNewCar = (e) => {
    e.preventDefault();
    axios
      .put(ADD_CAR_URI + userId, newCar)
      .then(() => {
        if (!newCar.make || !newCar.model || !newCar.year || !newCar.price) {
          setFormErrorMsg('Please fill in all the fields!');
        } else {
          setFormErrorMsg('');
          getData(userId, setUserToShow);
          setNewCar({
            make: '',
            model: '',
            year: '',
            price: '',
          });
        }
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
      getData(userId, setUserToShow);
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
        {userToShow.cars && userToShow.cars.length !== 0 ? (
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
              {userToShow.cars.map((car) => (
                <tr key={car._id}>
                  <td>{car.make}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                  <td>${car.price}</td>
                  <td>
                    <button
                      className="btn-primary btn-delete-car"
                      onClick={() => deleteCar(car._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>You have no cars to show. Please add a car you want to sell: </p>
        )}
      </div>
      <div>
        <form ref={AddCarFormRef}>
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
        <p>{formErrorMsg}</p>
      </div>
    </main>
  );
};

export default MyAccountScreen;
