import React from 'react';
import RadioInput from '../../atoms/Inputs/RadioInput';

const RadioInputs = ({ data, name }) => {
  return data.map((item) => (
    <RadioInput
      name={name}
      label={item.label}
      value={item.value}
      id={item.id}
      key={item.id}
    />
  ));
};

export default RadioInputs;
