import React from "react";

const Title = React.memo(({ text }) => {
  console.log("%cRender <Title/>", "color:red");
  return <h1>{text}</h1>;
});

export default Title;
