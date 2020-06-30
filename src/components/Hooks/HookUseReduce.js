import React, { useReducer } from "react";
import Header from "./Header";

// dispatch({ type: 'INCREMENT'})
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "SET_TITLE":
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  title: "Title",
};

const HookUseReduce = () => {
  //const [count, setCount] = useState(0);
  //const [title, setTitle] = useState("Titulo");

  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleTitle = (e) => {
    dispatch({ type: "SET_TITLE", title: e.target.value });
  };

  return (
    <div>
      <Header title="Hook useReduce" />
      <input
        type="text"
        onChange={handleTitle}
        placeholder="Ingrese un titulo"
        value={state.title}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h2>{state.title}</h2>
      <h4>{state.count}</h4>
    </div>
  );
};

export default HookUseReduce;
