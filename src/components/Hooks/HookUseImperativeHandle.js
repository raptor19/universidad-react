import React, { useRef } from "react";
import Header from "./Header";
import FancyInput from "./FancyInput";

const HookUseImperativeHandle = () => {
  const fancy = useRef();

  const handleClick = () => {
    fancy.current.dispachAlert();
    fancy.current.setParragraph("El gato estuvo aqui");
  };

  return (
    <div>
      <Header title="Hook useImperativeHandle" />
      <FancyInput ref={fancy} />
      <button onClick={handleClick}>Dispatch</button>
    </div>
  );
};

export default HookUseImperativeHandle;
