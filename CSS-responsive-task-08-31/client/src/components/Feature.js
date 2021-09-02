import React from 'react';
import styled from 'styled-components';

// -- Styled components
const FeatureDiv = styled.div`
  background-color: ${(props) =>
    props.yellow ? '#F7B578' : props.tomato ? '#e76f51' : '#F6A2C9'};
  padding: 100px;
  width: 100%;

  /* TABLET */
  @media (min-width: 768px) {
    width: calc(100% / 2);
  }
  /* DESKTOP */
  @media (min-width: 1000px) {
    width: calc(100% / 3);
    order: ${(props) => (props.yellow ? 0 : props.tomato ? 2 : 1)};
  }
`;

const Feature = ({ yellow, tomato, purple }) => {
  return (
    <FeatureDiv yellow={yellow} tomato={tomato} purple={purple}>
      Feature
    </FeatureDiv>
  );
};

export default Feature;
