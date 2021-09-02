import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  // local state
  const [carList, setCarList] = useState([]);

  const ALL_CARS_URI = 'http://localhost:5000/api/cars';

  useEffect(() => {
    axios.get(ALL_CARS_URI).then((response) => {
      setCarList(response.data);
    });
    // return () => {};
  }, []);

  return (
    <main>
      <h1>Latest Cars for Sale</h1>
      <div>
        {carList.map((item) => (
          <div key={item._id}>
            {item.cars.map((car) => (
              <div key={car._id}>
                <h4>
                  {car.make} {car.model}
                </h4>
                <p>Year: {car.year}</p>
                <p>Price: {car.price}</p>
                <p>
                  Seller: {item.name} {item.surname}
                </p>
                <p>Contact: {item.email}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomeScreen;
