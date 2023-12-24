import React from "react";
import { UiSaleCart } from "../../UI/UiSaleCart";
import { saleCartData } from "../../utils/constant";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const DiscountProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Title>Аукционные товары</Title>
      <Slider {...settings}>
        {saleCartData.map((el) => (
          <div>
            <UiSaleCart
              Icon={el.Icon}
              image={el.image}
              title={el.title}
              discountPrice={el.discountPrice}
              availability={el.availability}
              set={el.set}
              discount={el.discount}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};
const Container = styled("div")`
  padding: 0 6.38rem 0 6.38rem;
  margin-top: 3.03rem;
`;
const Title = styled("p")`
  color: #000;
  font-size: 1.5625rem;
  font-weight: 600;
`;
