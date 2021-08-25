import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: ${(props) =>
    props.primary ? 'green' : props.secondary ? '#hotpink' : 'black'};
  color: ${(props) =>
    props.primary ? '#fff' : props.secondary ? 'green' : '#fff'};
`;

const Button = ({ text, action, primary, secondary }) => {
  return (
    <ButtonStyled primary={primary} secondary={secondary} onClick={action}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
