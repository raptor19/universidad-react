import React, { useContext } from "react";
import MyContext from "./HookUseContext";

const NietoUseContext = () => {
  const { num, add } = useContext(MyContext);

  return (
    <div>
      <p>NietoUseContext</p>
      <button onClick={add}>Nieto Dispacher ({num})</button>
    </div>
  );
};

export default NietoUseContext;
