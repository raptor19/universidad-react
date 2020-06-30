import React, { useState } from "react";
import Header from "./Header";
import HijoUseContext from "./HijoUseContext";

export const MyContext = React.createContext(0);
// { Provider, Consumer }
// MyContext.Provider
// MyContext.Consumer

const HookUseContext = () => {
  const [num, setNum] = useState(0);

  const add = () => {
    setNum(num + 1);
  };

  return (
    <MyContext.Provider
      value={{
        num,
        add,
      }}
    >
      <div>
        <Header title="Hook useContext" />
        <button onClick={add}>Add({num})</button>
        <HijoUseContext/>
      </div>
    </MyContext.Provider>
  );
};

export default HookUseContext;
