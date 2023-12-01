import heroSm from "../../images/hero/heroSm.jpg";
import heroSmX2 from "../../images/hero/heroSmX2.jpg";
import heroMd from "../../images/hero/heroMd.jpg";
import heroMdX2 from "../../images/hero/heroMdX2.jpg";
import heroLg from "../../images/hero/heroLg.jpg";
import heroLgX2 from "../../images/hero/heroLgX2.jpg";

export const MainImage = () => {
  return (
    <picture>
      <source
        srcSet={`${heroLg} 1x, ${heroLgX2} 2x`}
        media="(min-width: 1280px)"
      />
      <source
        srcSet={`${heroMd} 1x, ${heroMdX2} 2x`}
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${heroSm} 1x, ${heroSmX2} 2x`}
        media="(max-width: 767px)"
      />
      <img src={heroSm} alt="wind turbines" width="100%" />
    </picture>
  );
};
