import React from "react";
import { InputUi } from "../UI/Input";
import styled from "styled-components";
import { ReactComponent as Basket } from "../assats/icons/Cart.svg";
import { ReactComponent as User } from "../assats/icons/Profile.svg";
import { ReactComponent as Image } from "../assats/icons/Group.svg";
import { ReactComponent as Line } from "../assats/icons/Line 1.svg";
import { ReactComponent as Burger } from "../assats/icons/Burger.svg";

function Header() {
  return (
    <Conatiner>
      <Image />
      <Catalog>
        <Burger />
        <p>Каталог</p>
      </Catalog>
      <div>
        <InputUi
          width="675px"
          height="40px"
          borderradius="62.5rem"
          background="#fff"
          placeholder="Поиск"
        />
      </div>
      <BlockUser>
        <BlockTitle>
          <Wellcome>Добро пожаловать</Wellcome>
          <Title>Вход/Регистрация</Title>
        </BlockTitle>
        <UserAndBasket>
          <UserStyle>
            <User />
          </UserStyle>
          <Line />
          <BasketStyle>
            <Basket />
          </BasketStyle>
          <Notification>2</Notification>
        </UserAndBasket>
      </BlockUser>
    </Conatiner>
  );
}

const Conatiner = styled("header")`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #0063a9;
  z-index: 2;
  top: 0;
`;

const Catalog = styled("div")`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 138px;
  height: 40px;
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.1);

  color: #fff;
  font-size: 15px;
  font-weight: 500;

  &:hover {
    background-color: rgb(9, 91, 159);
  }
`;

const Title = styled("span")`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

const Wellcome = styled("span")`
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;
const BlockUser = styled("div")`
  display: flex;
  gap: 1rem;
`;

const BasketStyle = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background: #fff;
  cursor: pointer;
`;
const UserStyle = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  background: #fff;
  cursor: pointer;
`;
const UserAndBasket = styled("div")`
  display: flex;
  gap: 0.5rem;
`;
const BlockTitle = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Notification = styled("div")`
  display: flex;
  position: relative;
  right: 1.2rem;
  bottom: 0.3rem;
  align-items: center;
  justify-content: center;

  width: 0.75rem;
  height: 0.75rem;
  border-radius: 100%;
  color: #fff;
  font-size: 0.5rem;
  background-color: red;
`;

export default Header;
