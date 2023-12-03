// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { SlideCard } from "../slider/Slider.styled";

// const CustomPrevArrow = ({ currentSlide, slideCount, ...props }) => (
//   <button
//     {...props}
//     className={
//       "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
//     }
//     aria-hidden="true"
//     aria-disabled={currentSlide === 0 ? true : false}
//     type="button"
//   >
//     Previous
//   </button>
// );

// const CustomNextArrow = ({ currentSlide, slideCount, ...props }) => (
//   <button
//     {...props}
//     className={
//       "slick-next slick-arrow" +
//       (currentSlide === slideCount - 1 ? " slick-disabled" : "")
//     }
//     aria-hidden="true"
//     aria-disabled={currentSlide === slideCount - 1 ? true : false}
//     type="button"
//   >
//     Next
//   </button>
// );

// const settings = {
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   nextArrow: <CustomNextArrow />,
//   prevArrow: <CustomPrevArrow />,
// };

// export const SliderEl = () => {
//   return (
//     <Slider {...settings}>
//       <SlideCard>Slide 1</SlideCard> <SlideCard>Slide 2</SlideCard>{" "}
//       <SlideCard>Slide 3</SlideCard> <SlideCard>Slide 4</SlideCard>{" "}
//       <SlideCard>Slide 5</SlideCard>
//     </Slider>
//   );
// };
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
  Picture,
  Text,
  CounterContainer,
  Counter,
  ActiveCount,
} from "./Slider.styled";

export const SliderEl = () => {
    const [activeSlide, setActiveSlide] = useState(1);
    // const totalSlides = 5;
  //   function SampleNextArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{ ...style, display: "block", background: "red" }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  //   function SamplePrevArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{ ...style, position: "absolute", top: 0, right: 0, display: "block", background: "green" }}
  //         onClick={onClick}
  //       />
  //     );
  //   }


    const settings = {
      customPaging: function (sliderData, i) {
        //FYI just have a look at the object to find available information
        //press f12 to access the console in most browsers
        //you could also debug or look in the source
        console.log(sliderData);
        return i + 1 + "/" + sliderData.slideCount;
      },
      appendArrows: ArrowsContainer,
      nextArrow: <CustomNextArrow></CustomNextArrow>,
      prevArrow: <CustomPrevArrow></CustomPrevArrow>,
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
      afterChange: (current) => {setActiveSlide(current)},
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
          <ActiveCount>{`0${activeSlide + 1}`}</ActiveCount> / {`0${sliderData.length}`}
        </Counter>
      </CounterContainer>
      <ArrowsContainer></ArrowsContainer>
      <Slider {...settings}>
        {sliderData.map((item) => (
          <a key={item.id} href="# ">
            <Card>
              <Picture>
                <source
                  srcSet={`${item.linkImg} 1x, ${item.likImgRetina} 2x`}
                  media="(min-width: 360px)"
                />
                <img src={item.linkImg} alt={item.title} width="100%" />
              </Picture>
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
