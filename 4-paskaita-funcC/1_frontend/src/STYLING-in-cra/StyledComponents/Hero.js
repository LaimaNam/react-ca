import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Section = styled.section`
  padding: 25px;
  background-color: #f0f0f0;
`;
const SectionTitle = styled.h2`
  text-align: center;
`;

const Hero = () => {
  return (
    <Section>
      <SectionTitle>Hello World</SectionTitle>
      <Button text="click me" action={console.log('hello world')} primary />
    </Section>
  );
};

export default Hero;
