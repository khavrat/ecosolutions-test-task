import { useState, useLayoutEffect } from "react";
import { GridContainer, ImageCard } from "./Grid.styled";
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
        title="Openness"
        text="to the world, people, new ideas and projects"
      />
      <AboutCard
        label={global}
        title="Responsibility"
        text="we are aware that the results of our work have an impact on our lives and the lives of future generations"
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
        title="Innovation"
        text="we use the latest technology to implement non-standard solutions"
      />
      <AboutCard
        label={ranking}
        title="Quality"
        text="we do not strive to be the first among others, but we want to be the best in our business"
      />
    </GridContainer>
  );
};
