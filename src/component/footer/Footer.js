import React from "react";
import styled from "styled-components";
import { ReactComponent as Image } from "../assats/icons/Group.svg";
import { ReactComponent as AppStore } from "../assats/icons/AppStore.svg";
import { ReactComponent as GooglePay } from "../assats/icons/GooglePay.svg";
import { ReactComponent as Whatsapp } from "../assats/icons/Whatsapp.svg";
import { ReactComponent as Instagram } from "../assats/icons/logo-instagram.svg";
import { ReactComponent as FaceBook } from "../assats/icons/logo-facebook.svg";

export const Footer = () => {
  return (
    <Container>
      <ContainerBlock>
        <ContainerChilde>
          <Block1>
            <ImageStyle />
            <Title>
              Первый отечественный бренд Iskender на рынке сантехники от
              компании ОсОО «Стройдом.кг»
            </Title>
            <Store>
              <AppStore />
              <GooglePay />
            </Store>
          </Block1>
          <div>
            <AdressTitle>Адреса</AdressTitle>
            <Adress>
              <p>ЭлитСтрой</p>
              <span>ул. Ден-Сяопина 18/1</span>
              <p>Баткен</p>
              <span>ул. Льва-Толстого 19</span>
              <p>ТааТан</p>
              <span>ул. Лермонтова 6</span>
            </Adress>
          </div>
          <div>
            <CompanyTitle>Компания</CompanyTitle>
            <Company>
              <p>Каталог</p>
              <p>Избранное</p>
              <p>Личный кабинет</p>
            </Company>
          </div>
          <div>
            <ContactTitle>Контакты</ContactTitle>
            <Email>
              <span>Email:</span>
              <p>iskender.kg@gmail.com</p>
              <span>Телефон:</span>
              <p>+996 (500) 000-104</p>
              <p>+996 (997) 000-104</p>
              <p>+996 (222) 000-104</p>
            </Email>
            <WhatsappStyle />
          </div>
        </ContainerChilde>
        <NetworkBlock>
          <p>© 2023 Iskender.kg - Отечественный бренд сантехники</p>
          <SocialNetwork>
            <InstagramStyle />
            <FacebookStyle />
          </SocialNetwork>
        </NetworkBlock>
      </ContainerBlock>
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  height: 100%;
  margin-top: 4.12rem;
  padding-bottom: 1.88rem;
  background: linear-gradient(107deg, #3186c3 6.46%, #004f86 68.08%);
`;
const ContainerBlock = styled("div")`
  padding: 0 6.25rem 0 6.25rem;
`;
const ContainerChilde = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const ImageStyle = styled(Image)`
  width: 183.599px;
  height: 51px;
`;
const Title = styled("p")`
  width: 15rem;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;
const Block1 = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 4.5rem;
`;
const Adress = styled("div")`
  display: flex;
  flex-direction: column;
  p {
    color: #e0e0e0;
    font-size: 15px;
    font-weight: 400;
    &:hover {
      color: #fff;
    }
  }
  span {
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    &:hover {
      color: gray;
    }
  }
`;
const AdressTitle = styled("p")`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-top: 4.94rem;
`;
const Company = styled("div")`
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-weight: 500;
    &:hover {
      color: gray;
    }
  }
`;
const CompanyTitle = styled("p")`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-top: 4.94rem;
`;
const ContactTitle = styled("p")`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-top: 4.94rem;
`;
const Email = styled("div")`
  span {
    color: #e0e0e0;
    font-size: 15px;
    font-weight: 400;
  }
  p {
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    &:hover {
      color: gray;
    }
  }
`;
const Store = styled("div")`
  display: flex;
  gap: 1.14rem;
  margin-top: 4.5rem;
`;
const WhatsappStyle = styled(Whatsapp)`
  margin-top: 2.5rem;
  cursor: pointer;
`;
const SocialNetwork = styled("div")`
  display: flex;
  gap: 0.94rem;
`;

const NetworkBlock = styled("div")`
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6.56rem;
  padding-top: 2.06rem;
  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
const InstagramStyle = styled(Instagram)`
  cursor: pointer;
`;
const FacebookStyle = styled(FaceBook)`
  cursor: pointer;
`;
