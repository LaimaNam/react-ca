import React, { useState, useRef } from 'react';

// components
import RadioInputs from '../molecules/FormGroups/RadioInputs';
import Textinputs from '../molecules/FormGroups/Textinputs';

const RegistrationForm = () => {
  //hooks
  // -- local state
  const [user, setUser] = useState({
    name: '',
    surname: '',
    age: '',
    gender: '',
  });
  const [message, setMessage] = useState('');

  //refs
  const formRef = useRef();

  //custom functions
  const handleSubmit = (e) => {
    e.preventDefault();

    // -- Inputs Validation
    // if all fields are specified
    if (
      !e.target.name.value ||
      !e.target.surname.value ||
      !e.target.age.value ||
      !e.target.gender.value
    ) {
      setMessage('Please provide all information');
      formRef.current.reset();
      return;
    }
    // if user is adult

    if (e.target.age.value === 'minor') {
      setMessage('You must be over 18 to register');
      formRef.current.reset();
      return;
    }
    //if validation passes updating state with user input
    setUser({
      name: e.target.name.value,
      surname: e.target.surname.value,
      age: e.target.age.value,
      gender: e.target.gender.value,
    });

    //sending data to API and showing greeting
    // --  fetching user
    // -- updating UI
    setMessage(
      `Hello ${e.target.gender.value === 'female' ? 'Mrs.' : 'Mr.'} ${
        e.target.name.value
      }`
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <p>Name and surname:</p>
        <Textinputs
          data={[
            { label: 'Name: ', id: 'name' },
            { label: 'Surname: ', id: 'surname' },
          ]}
        />
        <p>Age:</p>
        <RadioInputs
          data={[
            { label: 'under 18', value: 'minor', id: 'minor' },
            { label: 'over 18', value: 'adult', id: 'adult' },
          ]}
          name="age"
        />
        <p>Gender:</p>
        <RadioInputs
          data={[
            { label: 'female', value: 'female', id: 'female' },
            { label: 'male', value: 'male', id: 'male' },
          ]}
          name="gender"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistrationForm;
