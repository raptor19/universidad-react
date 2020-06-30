import React from "react";

const Counter = React.memo(({ count }) => {
  console.log("%cRender <Counter/>", "color:blue");
  return <h1>{count}</h1>;
});

export default Counter;
