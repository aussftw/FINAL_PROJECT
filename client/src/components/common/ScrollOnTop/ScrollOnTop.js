import { useEffect } from "react";

const ScrollOnTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollOnTop;
