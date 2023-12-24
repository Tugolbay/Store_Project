import React from "react";
import styled from "styled-components";
import { UiCart } from "../../UI/UiCart";
import { dataCart, dataCarts } from "../../utils/constant";

export const Сategories = () => {
  return (
    <Container>
      <p>Категории</p>
      <Cart>
        {dataCart.map((el) => (
          <UiCart title={el.title} image={el.image} />
        ))}
      </Cart>
      <Carts>
        {dataCarts.map((el) => (
          <UiCart title={el.title} image={el.image} />
        ))}
      </Carts>
    </Container>
  );
};

const Container = styled("div")`
  padding: 0 6.38rem 0 6.38rem;
  margin-top: 3.06rem;
  p {
    color: #000;
    font-size: 1.5625rem;
    font-weight: 600;
  }
`;
const Cart = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const Carts = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;
