import { useContext } from "react";
import { MobileContext } from "Context";
import { mobileImages, desktopImages } from "img";

export const ResponsiveImage = () => {
  const isMobile = useContext(MobileContext);
  const images = isMobile ? mobileImages : desktopImages;

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${images.handWebp1x} 1x, ${images.handWebp2x} 2x, ${images.handWebp3x} 3x`}
      />
      <img
        srcSet={`${images.handPng1x} 1x, ${images.handPng2x} 2x, ${images.handPng3x} 3x`}
        src={images.handPng1x}
        alt="Thumbs up"
      />
    </picture>
  );
};
