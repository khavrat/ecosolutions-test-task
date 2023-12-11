import { useState, useLayoutEffect } from "react";
import texts from "../../data/texts.json"
import { AboutCard } from "../reusableComponents/aboutCard/AboutCard";
import charge from "../../images/icons/card/charge.svg";
import circle from "../../images/icons/card/circle.svg";
import global from "../../images/icons/card/global.svg";
import ranking from "../../images/icons/card/ranking.svg";
import { GridFirstPicture, GridSecondPicture } from "./GridPicture";
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
            <GridFirstPicture/>
          </ImageCard>
          <ImageCard>
            <GridSecondPicture/>
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
