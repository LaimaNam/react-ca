import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? 'skyblue' : 'grey')};
  color: white;
  padding: 7px 40px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Button = ({ primary, secondary, text }) => {
  return (
    <StyledButton primary={primary} secondary={secondary}>
      {text}
    </StyledButton>
  );
};

export default Button;
