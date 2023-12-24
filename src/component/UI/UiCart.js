import React from "react";
import styled from "styled-components";

export const UiCart = ({ title, image }) => {
  return (
    <CartBath>
      <BathTitle>
        <Bath>{title}</Bath>
        <Quantity>3000 товаров</Quantity>
      </BathTitle>
      <Images>
        <img src={image} alt="img" />
      </Images>
    </CartBath>
  );
};

const CartBath = styled("div")`
  width: 10.625rem;
  height: 12.5rem;
  border-radius: 0.625rem;
  background: #fff;
  padding: 0.61rem 0rem 0rem 0.61rem;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
const BathTitle = styled("div")`
  display: flex;
  flex-direction: column;
`;
const Bath = styled("span")`
  color: #000;
  font-size: 0.875rem;
  font-weight: 500;
`;
const Quantity = styled("span")`
  color: var(--grey-2, #727272);
  font-size: 0.75rem;
  font-weight: 400;
`;
const Images = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;
