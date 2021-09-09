import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

//styles
const HomeTitle = styled.h1`
  text-align: center;
`;
const CarsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* gap: 20px; */

  div {
    width: 100%;
    margin: 7.5px 7.5px;
    padding: 20px;
    background-color: #fff;

    /* text-align: center; */
  }

  h4 {
    margin: 0;
    padding-bottom: 3px;
    margin-bottom: 10px;
    font-size: 1.4em;
    border-bottom: 1px solid #ededed;
  }

  p {
    padding-bottom: 5px;
  }

  @media (min-width: 400px) {
    div {
      width: calc(100% / 2 - 55px);
    }
  }

  @media (min-width: 768px) {
    div {
      width: calc(100% / 4 - 55px);
    }
  }
`;

//component
const HomeScreen = () => {
  // local state
  const [carList, setCarList] = useState([]);

  const ALL_CARS_URI = 'http://localhost:5000/api/cars';

  useEffect(() => {
    axios.get(ALL_CARS_URI).then((response) => {
      setCarList(response.data);
    });
  }, []);

  return (
    <main>
      <HomeTitle>Latest Cars for Sale</HomeTitle>
      <CarsWrapper>
        {carList.map((item) =>
          item.cars.map((car) => (
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
          ))
        )}
      </CarsWrapper>
    </main>
  );
};

export default HomeScreen;
