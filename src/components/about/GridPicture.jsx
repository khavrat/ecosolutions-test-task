import qualityMd from "../../images/about/qualityMd.jpg";
import qualityMdX2 from "../../images/about/qualityMdX2.jpg";
import qualityLg from "../../images/about/qualityLg.jpg";
import qualityLgX2 from "../../images/about/qualityLgX2.jpg";
import innovationMd from "../../images/about/innovationMd.jpg";
import innovationMdX2 from "../../images/about/innovationMdX2.jpg";
import innovationLg from "../../images/about/innovationLg.jpg";
import innovationLgX2 from "../../images/about/innovationLgX2.jpg";

export const GridFirstPicture = () => {
  return (
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
  );
};

export const GridSecondPicture = () => {
  return (
    <picture>
      <source
        srcSet={`${innovationLg} 1x, ${innovationLgX2} 2x`}
        media="(min-width: 1280px)"
      />
      <source
        srcSet={`${innovationMd} 1x, ${innovationMdX2} 2x`}
        media="(min-width: 768px)"
      />
      <img src={innovationMd} loading="lazy" alt="innovations" width="100%" />
    </picture>
  );
};
