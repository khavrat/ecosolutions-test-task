import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../../data/sliderData";
import { ButtonRound } from "../reusableComponents/buttonRound/ButtonRound";
import {
  ArrowsContainer,
  CustomPrevArrow,
  CustomNextArrow,
  Card,
  Location,
  Title,
  WrapperTop,
  WrapperBottom,
  Text,
  CounterContainer,
  Counter,
  ActiveCount,
} from "./Slider.styled";

export const SliderEl = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const settings = {
    appendArrows: ArrowsContainer,
    mobileFirst: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
    weitForAnimate: false,
    beforeChange: (current, next) => setActiveSlide(next),
    afterChange: (current) => {
      setActiveSlide(current);
    },
    nextArrow: (
      <CustomNextArrow
        type="button"
        aria-label="to the next slide"
      ></CustomNextArrow>
    ),
    prevArrow: (
      <CustomPrevArrow
        type="button"
        aria-label="to the previous slide"
      ></CustomPrevArrow>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <CounterContainer>
        <Counter>
          <ActiveCount>{`0${activeSlide + 1}`}</ActiveCount> /
          {`0${sliderData.length}`}
        </Counter>
      </CounterContainer>
      <ArrowsContainer className="container"></ArrowsContainer>
      <Slider {...settings}>
        {sliderData.map((item) => (
          <a key={item.id} href="# " aria-label="go into the detail">
            <Card>
              <img
                src={item.linkImg}
                srcSet={`${item.linkImg} 1x, ${item.likImgRetina} 2x`}
                loading="lazy"
                alt={item.title}
                width="100%"
              />
              <WrapperTop>
                <div>
                  <Location>{item.location}</Location>
                  <Title>{item.title}</Title>
                </div>
                <ButtonRound type="button" />
              </WrapperTop>
              <WrapperBottom>
                <Text>{item.discription}</Text>
                <Text>{item.date}</Text>
              </WrapperBottom>
            </Card>
          </a>
        ))}
      </Slider>
    </>
  );
};








