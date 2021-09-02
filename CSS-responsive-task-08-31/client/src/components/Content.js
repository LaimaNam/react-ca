import React from 'react';
import styled from 'styled-components';

// -- Styled components
const ContentDiv = styled.div`
  background-color: #e7e7ef;
  padding: 150px;
  width: 100%;

  /* DESKTOP */
  @media (min-width: 1000px) {
    order: 4;
  }
`;

const Content = () => {
  return <ContentDiv>Content</ContentDiv>;
};

export default Content;
