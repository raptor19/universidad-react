import React, { useState, useEffect, useLayoutEffect } from "react";
import Header from "./Header";

const HookUseLayoutEffect = () => {
  const [count, setCount] = useState(0);

  // useEffect -> asincrono
  // useEffect -> se ejecuta despues de que se actualiza el DOM

  // useLayoutEffect -> sincrono
  // useLayoutEffect -> se ejecuta antes que se actualice el DOM

  useEffect(() => {
    console.log("useEffect 1");
  }, [count]);

  useEffect(() => {
    console.log("useEffect 2");
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect 1");
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect 2");
  }, [count]);

  const add = () => setCount(count + 1);
  return (
    <div>
      <Header title="Hook useLayoutEffect" />
      <button onClick={add}>Add ({count})</button>
    </div>
  );
};

export default HookUseLayoutEffect;
