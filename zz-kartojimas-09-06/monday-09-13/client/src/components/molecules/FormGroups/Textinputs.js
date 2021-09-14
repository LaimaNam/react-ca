import React from 'react';
import TextInput from '../../atoms/Inputs/TextInput';

const Textinputs = ({ data }) => {
  return data.map((item) => (
    <TextInput key={item.id} label={item.label} id={item.id} />
  ));
};

export default Textinputs;
