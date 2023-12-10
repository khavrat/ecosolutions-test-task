import { useState, useLayoutEffect } from "react";
import texts from "../../data/texts.json"
import { AboutCard } from "../reusableComponents/aboutCard/AboutCard";
import charge from "../../images/icons/card/charge.svg";
import circle from "../../images/icons/card/circle.svg";
import global from "../../images/icons/card/global.svg";
import ranking from "../../images/icons/card/ranking.svg";
import qualityMd from "../../images/about/qualityMd.jpg"
import qualityMdX2 from "../../images/about/qualityMdX2.jpg";
import qualityLg from "../../images/about/qualityLg.jpg";
import qualityLgX2 from "../../images/about/qualityLgX2.jpg";
import innovationMd from "../../images/about/innovationMd.jpg"
import innovationMdX2 from "../../images/about/innovationMdX2.jpg";
import innovationLg from "../../images/about/innovationLg.jpg";
import innovationLgX2 from "../../images/about/innovationLgX2.jpg";
import { GridContainer, ImageCard } from "./Grid.styled";


export const Grid = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <GridContainer>
      <AboutCard
        label={circle}
        title={texts.grid.title1}
        text={texts.grid.text1}
      />
      <AboutCard
        label={global}
        title={texts.grid.title2}
        text={texts.grid.text2}
      />
      {windowWidth >= 768 ? (
        <>
          <ImageCard>
            <picture>
              <source
                srcSet={`${qualityLg} 1x, ${qualityLgX2} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${qualityMd} 1x, ${qualityMdX2} 2x`}
                media="(min-width: 768px)"
              />
              <img src={qualityMd} loading="lazy" alt="workmen" width="100%" />
            </picture>
          </ImageCard>
          <ImageCard>
            <picture>
              <source
                srcSet={`${innovationLg} 1x, ${innovationLgX2} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${innovationMd} 1x, ${innovationMdX2} 2x`}
                media="(min-width: 768px)"
              />
              <img
                src={innovationMd}
                loading="lazy"
                alt="innovations"
                width="100%"
              />
            </picture>
          </ImageCard>
        </>
      ) : (
        ""
      )}
      <AboutCard
        label={charge}
        title={texts.grid.title3}
        text={texts.grid.text3}
      />
      <AboutCard
        label={ranking}
        title={texts.grid.title4}
        text={texts.grid.text4}
      />
    </GridContainer>
  );
};
