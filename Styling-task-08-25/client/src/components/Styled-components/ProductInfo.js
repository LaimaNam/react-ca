import React, { useState } from 'react';
import styled from 'styled-components';

// -- Components
import Button from './Button';

// -- Styled components
const ProductTitleWrapper = styled.div``;
const H2 = styled.h2``;

const ButtonsWrapper = styled.div``;
const ButtonBack = styled.button``;
const ButtonFwrd = styled.button``;

const ProductInfoWrapper = styled.div``;
const Price = styled.h3``;

const MainProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const SingleInfo = styled.p``;
const Size = styled.p``;
const AdditionalInfo = styled.div``;
const SingleAdditionalInfo = styled.p``;

const ProductStateWrapper = styled.div`
  display: flex;
`;
const ProductCounterBtns = styled.div``;
const Counter = styled.button``;
const CounterInput = styled.input``;
//---------------------------------------

const ProductInfo = ({ title, price, info, size, additionalInfo }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count === 1) return;
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <ProductTitleWrapper>
        <H2>{title}</H2>
        <ButtonsWrapper>
          <ButtonBack></ButtonBack>
          <ButtonFwrd></ButtonFwrd>
        </ButtonsWrapper>
      </ProductTitleWrapper>
      <ProductInfoWrapper>
        <Price>€{price.toFixed(2)}</Price>
        <MainProductInfo>
          {info.map((singleInfo) => (
            <SingleInfo>{singleInfo}</SingleInfo>
          ))}
        </MainProductInfo>
        <Size>{size}</Size>
        <AdditionalInfo>
          {additionalInfo.map((info) => (
            <SingleAdditionalInfo key={info}>{info}</SingleAdditionalInfo>
          ))}
        </AdditionalInfo>
      </ProductInfoWrapper>
      <ProductStateWrapper>
        <ProductCounterBtns>
          <Counter onClick={() => decrement()}>-</Counter>
          <CounterInput value={count} />
          <Counter onClick={() => increment()}>+</Counter>
        </ProductCounterBtns>
        <Button primary text="Add to cart" />
      </ProductStateWrapper>
    </>
  );
};

export default ProductInfo;
