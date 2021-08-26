import React from 'react';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';

//Styled components
const Section = styled.section`
  display: flex;
  max-width: 900px;
  margin: auto;
`;
const ImageWrapper = styled.div`
  width: 70%;
`;
const Image = styled.img`
  width: 100%;
`;
const ProductInfoWrapper = styled.div`
  padding: 20px;
  width: 40%;
`;

const product = {
  imgUrl: 'https://per4mmedia.com/wp-content/uploads/2021/03/35.jpg',
  price: 35,
  title: 'Ayrton Senna Lotus 97T Formula 1 Poster',
  info: [
    'Ayrton Senna, Lotus 97T Poster.',
    "Posters series of legendary Senna's F1 cars.",
    'This is an original print illustrated by me.',
    'All pieces are printed on heavyweigth 250 gsm photo paper in a lovely matt finish.',
  ],
  size: 'One size: 50x70cm(19.7x27.5inch)',
  additionalInfo: [
    'Frame not included.',
    'Please keep in mind there may be a slight variation from screen to printed poster art.',
  ],
};

const Product = () => {
  return (
    <Section>
      <ImageWrapper>
        <Image src={product.imgUrl} alt={product.title}></Image>
      </ImageWrapper>
      <ProductInfoWrapper>
        <ProductInfo
          title={product.title}
          price={product.price}
          info={product.info}
          size={product.size}
          additionalInfo={product.additionalInfo}
        />
      </ProductInfoWrapper>
    </Section>
  );
};

export default Product;
