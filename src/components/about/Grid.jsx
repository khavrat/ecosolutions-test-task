import { useState, useLayoutEffect } from "react";
import { GridContainer } from "./Grid.styled";
import { AboutCard } from "../reusableComponents/aboutCard/AboutCard";
import charge from "../../images/icons/card/charge.svg";
import circle from "../../images/icons/card/circle.svg";
import global from "../../images/icons/card/global.svg";
import ranking from "../../images/icons/card/ranking.svg";

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
        <>{/* <CardImg>3</CardImg> <CardImg>3</CardImg> */}</>
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
