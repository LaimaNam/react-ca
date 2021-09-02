import React from 'react';
import styled from 'styled-components';

// -- Styled components
const SignUpDiv = styled.div`
  background-color: #ecf7fd;
  padding: 100px;
  width: 100%;

  /* TABLET */
  @media (min-width: 768px) {
    width: calc(100% / 2);
  }
  /* DESKTOP */
  @media (min-width: 1000px) {
    padding: 70px;
    width: 100%;
    order: 3;
  }
`;

const SignUp = () => {
  return <SignUpDiv>SignUp</SignUpDiv>;
};

export default SignUp;
