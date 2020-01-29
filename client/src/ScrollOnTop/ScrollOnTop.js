import { useEffect } from "react";

const ScrollOnTop = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollOnTop;
