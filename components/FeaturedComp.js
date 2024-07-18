import styled from "styled-components";
import Center from "./Center";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import FlyingButton from 'react-flying-item'

const Bg = styled.div`
  padding: 5px 0 0 0;
  @media screen and (min-width: 768px) {
    margin: 10px 0 20px 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
  color: white;
`;

const Desc = styled.p`
  color: white;
  font-size: .9rem;
  margin: 5px 0 0 0;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  img {
    max-width: 100%;
    max-height: 250px;
    display: block;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      max-height: 150px;
    }
  }
  div:nth-child(1) {
    order: 2;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
    
    & > div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

const FlyingWrapperFeatured = styled.div`
  button {
    background-color: #1B1212;
    color: white;
    border: 3px solid #1B1212;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    svg {
      height: 15px;
      margin-right: 5px;
    }
    &:hover {
      background-color: #28282B;
    }
    &:active {
      background-color: #1B1212;
    }
  }
`;

const ImgColumn = styled(Column)`
  & > div {
    width: 100%;
  }
`;

const CenterImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 15px 0;
`;

export const StyledImage = styled.img`
  border-radius: 10px;
`;

const FeaturedWrapper = styled.div`
  margin-bottom: 10px;
`;


export default function FeaturedComp({product}) {
  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <FeaturedWrapper>
              <Title>{product?.title}</Title>
              <Desc>{product?.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink href={'/product/'+product?._id}>View more</ButtonLink> 
                <FlyingWrapperFeatured onClick={addFeaturedToCart}>
                  <FlyingButton
                    src={product?.images[0]} 
                    targetTop={'5%'} 
                    targetLeft={'95%'}
                    flyingItemStyling={{
                      maxWidth: '80px',
                      maxWidth: '80px',
                      width: 'auto',
                      height: 'auto',
                    }}
                  >
                    <CartIcon />
                    Add to cart
                  </FlyingButton>
                </FlyingWrapperFeatured>      
              </ButtonsWrapper>    
            </FeaturedWrapper>
          </Column>
          <ImgColumn>
            <CenterImg>
              <StyledImage src={product?.images?.[0]} alt="featured image" />
            </CenterImg>
          </ImgColumn>
        </ColumnsWrapper>
      </Center>
    </Bg>
  )
}