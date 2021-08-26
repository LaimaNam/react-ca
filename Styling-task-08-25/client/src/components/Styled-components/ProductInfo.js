import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// -- Components
import Button from './Button';

// -- Styled components
const ProductTitleWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;
const H2 = styled.h2`
  font-size: 1.2em;
  margin-top: 0px;
  padding-right: 20px;
  width: 60%;
  font-weight: 500;
`;

const ButtonsWrapper = styled.div`
  width: 100px;
`;
const ButtonArrow = styled.button`
  padding: 5px 9px;
  margin-right: 8px;
  font-weight: 700;
  border: 1.8px solid black;
  background-color: transparent;
  cursor: pointer;
`;

const ProductInfoWrapper = styled.div``;
const Price = styled.h3`
  margin: 0;
`;

const MainProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const SingleInfo = styled.p``;
const Size = styled.p`
  margin-top: 0;
  width: 70px;
  line-height: 45px;
`;
const AdditionalInfo = styled.div`
  margin: 0;
`;
const SingleAdditionalInfo = styled.p`
  margin: 0;
`;

const ProductStateWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;
`;
const ProductCounterBtns = styled.div``;
const Counter = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
`;
const CounterInput = styled.input`
  width: 15px;
  padding: 5px 7px;
  text-align: center;
  border: 1px solid #e8e8e8;
`;
//---------------------------------------

const ProductInfo = ({ title, price, info, size, additionalInfo }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {}, [count]);

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
          <ButtonArrow>&#x3c;</ButtonArrow>
          <ButtonArrow>&#x3e;</ButtonArrow>
        </ButtonsWrapper>
      </ProductTitleWrapper>
      <ProductInfoWrapper>
        <Price>€{price.toFixed(2)}</Price>
        <MainProductInfo>
          {info.map((singleInfo) => (
            <SingleInfo key={singleInfo}>{singleInfo}</SingleInfo>
          ))}
        </MainProductInfo>
        <Size>{size}</Size>
        <AdditionalInfo>
          {additionalInfo.map((info) => (
            <SingleAdditionalInfo key={info}>* {info}</SingleAdditionalInfo>
          ))}
        </AdditionalInfo>
      </ProductInfoWrapper>
      <ProductStateWrapper>
        <ProductCounterBtns>
          <Counter onClick={() => decrement()}>-</Counter>
          <CounterInput
            onChange={(e) => setCount(+e.target.value)}
            value={count}
          />
          <Counter onClick={() => increment()}>+</Counter>
        </ProductCounterBtns>
        <Button primary text="Add to cart" />
      </ProductStateWrapper>
    </>
  );
};

export default ProductInfo;
