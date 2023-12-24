import React from "react";
import styled from "styled-components";
import { ReactComponent as Circle } from "../../assats/icons/Ellipse 492.svg";
import { ReactComponent as Circles } from "../../assats/icons/Ellipse 491.svg";
import { ReactComponent as Illustration } from "../../assats/icons/illustration.svg";
import { newsPage } from "../../utils/constant";

export const NewsPage = () => {
  return (
    <Container>
      <DescBlock>
        <Title>Новости</Title>
        <Text>все</Text>
      </DescBlock>
      <ContainerChilde>
        {newsPage.map((el) => (
          <Banner>
            <CircleStyles>
              <Circles />
            </CircleStyles>
            <InfoBlock>
              <div>
                <Price>-{el.discount}%</Price>
                <p>{el.title}</p>
              </div>
              <IllustrationStyle />
            </InfoBlock>
            <CircleStyle>
              <Circle />
            </CircleStyle>
            <Button>Подробнее</Button>
          </Banner>
        ))}
        <EmptyBunner></EmptyBunner>
      </ContainerChilde>
    </Container>
  );
};

const Container = styled("div")`
  padding: 0 6.38rem 0 6.38rem;
  margin-top: 3.12rem;
`;

const DescBlock = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerChilde = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const Title = styled("p")`
  color: #000;
  font-size: 1.5625rem;
  font-weight: 600;
`;
const Banner = styled("div")`
  position: relative;
  width: 25.10563rem;
  height: 11.3425rem;
  border-radius: 0.69163rem;
  background: #f0f9ff;
`;
const CircleStyle = styled("div")`
  display: flex;
  align-items: flex-end;
  height: 8.5rem;
`;
const CircleStyles = styled("div")`
  display: flex;
  justify-content: flex-end;
`;
const InfoBlock = styled("div")`
  display: flex;
  position: absolute;
  top: 1.39rem;
  left: 1.38rem;
`;
const Price = styled("span")`
  color: #000;
  font-size: 1.50631rem;
  font-weight: 700;
`;
const IllustrationStyle = styled(Illustration)`
  padding-left: 2rem;
`;
const Button = styled("button")`
  position: absolute;
  top: 7rem;
  left: 1.38rem;
  padding: 0.50213rem 1.50631rem;
  border-radius: 0.69163rem;
  background: #0063a9;
  color: #fff;
  border: none;
  cursor: pointer;
`;
const EmptyBunner = styled("div")`
  width: 25.10563rem;
  height: 11.3425rem;
  border-radius: 0.69163rem;
  background: #ecedf2;
`;
const Text = styled("p")`
  color: #3186c3;
  font-size: 1rem;
  font-weight: 600;
`;
