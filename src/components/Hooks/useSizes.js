import {useState, useEffect, useDebugValue} from "react";

const useSizes = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useDebugValue('HookResize')
  //Agregar listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Manejador de cambio
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  return {
    width,
    height,
  };
};

export default useSizes;
