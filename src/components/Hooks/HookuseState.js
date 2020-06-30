import React, { useState } from "react";
import Header from "./Header";

const HookuseState = () => {
  //State
  const [state, setState] = useState({
    clicks: 0,
    title: "",
  });
  const [isActive, setActive] = useState(false);
  const mergeState = (nextState) => {
    setState({
      ...state,
      ...nextState,
    });
  };

  //Aumentar clicks
  const addClicks = () => {
    mergeState({ clicks: state.clicks + 1 });
  };

  const handleInput = (e) => {
    mergeState({ title: e.target.value });
  };

  const toggle = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <Header title="Hook useState" />
      {isActive && <Header title="Hook useState" />}
      <input type="text" value={state.title} onChange={handleInput} />
      <button onClick={addClicks}>Clicks ({state.clicks})</button>
      <button onClick={toggle}>{isActive ? "Desactivar" : "Activar"}</button>
      <h3>{state.title}</h3>
    </div>
  );
};

export default HookuseState;
