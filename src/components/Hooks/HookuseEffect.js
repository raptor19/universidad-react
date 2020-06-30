import React, { useState, useEffect } from "react";
import Header from "./Header";
import ControlUseEffect from './ControlUseEffect';
import HttpUseEffect from "./HttpUseEffect";

const HookuseEffect = () => {
  //State
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  //useEffect -> componentDidMount, componenDidUpdate, componentWillUnmount
  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    // limpio el escuchador del evento.
    return (() => {
        window.removeEventListener("mousemove", handleMove);
    })
  });

  const handleMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <div>
      <Header title="Hook useEffect" />
      <h3>X: { mouseX } Y: { mouseY }</h3>
      <ControlUseEffect/>
      <HttpUseEffect/>
    </div>
  );
};

export default HookuseEffect;
