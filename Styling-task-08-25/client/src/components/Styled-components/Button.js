import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? '#07aef5' : 'grey')};
  color: white;
  padding: 7px 40px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: skyblue;
  }
`;

const Button = ({ primary, secondary, text }) => {
  return (
    <StyledButton primary={primary} secondary={secondary}>
      {text}
    </StyledButton>
  );
};

export default Button;
