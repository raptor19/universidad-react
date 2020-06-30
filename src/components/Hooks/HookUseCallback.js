import React, { useCallback, useState } from "react";
import Header from "./Header";
import Button from "./Button";

// useCallback ayuda para evitar crear nuevas funciones con cada renderizado
//este hook se usa en combinacion con React.memo()

const HookUseCallback = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const incrementA = useCallback(() => setA((a) => a + 1), []);
  const incrementB = useCallback(() => setB((b) => b + a), [a]);
  return (
    <div>
      <Header title="Hook useCallback" />
      <Button callback={incrementA}>Increment A</Button>
      <Button callback={incrementB}>Increment B</Button>
      <h1>a: {a}</h1>
      <h1>b: {b}</h1>
    </div>
  );
};

export default HookUseCallback;
