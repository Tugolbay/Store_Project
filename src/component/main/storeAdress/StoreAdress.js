import React from "react";
import styled from "styled-components";
import { adressCart } from "../../utils/constant";
import { ReactComponent as Group } from "../../assats/icons/Group 480964073.svg";
import { ReactComponent as Location } from "../../assats/icons/Location.svg";
import { ReactComponent as Clock } from "../../assats/icons/Clock-Square.svg";
import { ReactComponent as Telephone } from "../../assats/icons/Vector 208.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const StoreAdress = () => {
  return (
    <Container>
      <Title>Адреса магазинов</Title>
      <ContainerChildren>
        {adressCart.map((el) => (
          <Block>
            <ContainerChilde>
              <ContainerDesc>
                <Group />
                <BlockDesc>
                  <TitleBlock>{el.title}</TitleBlock>
                  <Text href="./">{el.text}</Text>
                </BlockDesc>
              </ContainerDesc>
              <ArrowForwardIconStyle />
            </ContainerChilde>
            <LocationBlock>
              <Location />
              <Description>{el.description}</Description>
            </LocationBlock>
            <UserInfo>
              <ClockBlock>
                <Clock />
                <p>{el.time}</p>
              </ClockBlock>
              <TelephoneBlock>
                <Telephone />
                <p>{el.number}</p>
              </TelephoneBlock>
            </UserInfo>
          </Block>
        ))}
      </ContainerChildren>
    </Container>
  );
};

const Container = styled("div")`
  padding: 0 6.38rem 0 6.38rem;
  margin-top: 3.12rem;
`;

const ContainerChilde = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e3e3e3;
`;
const ContainerChildren = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const Title = styled("p")`
  color: #000;
  font-size: 1.5625rem;
  font-weight: 600;
`;
const Block = styled("div")`
  width: 25.5rem;
  height: 11.1875rem;
  border-radius: 0.625rem;
  background: #fff;
  padding: 0.5rem;
`;
const TitleBlock = styled("span")`
  color: #000;
  font-size: 1.125rem;
  font-weight: 500;
`;
const Text = styled("a")`
  color: #0062d5;
  font-size: 0.75rem;
  font-weight: 400;
`;
const BlockDesc = styled("div")`
  display: flex;
  flex-direction: column;
`;
const ContainerDesc = styled("div")`
  display: flex;
  gap: 0.5rem;
`;
const Description = styled("p")`
  width: 10rem;
  color: #000;
  font-size: 0.875rem;
  font-weight: 400;
`;
const LocationBlock = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const ClockBlock = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p {
    color: #000;
    font-size: 0.875rem;
    font-weight: 400;
  }
`;
const TelephoneBlock = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p {
    color: #000;
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

const UserInfo = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const ArrowForwardIconStyle = styled(ArrowForwardIcon)`
  cursor: pointer;
`;
