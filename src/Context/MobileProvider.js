import { useState, useEffect } from "react";
import { MobileContext } from "./MobileContext";
import PropTypes from "prop-types";

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};

MobileProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
