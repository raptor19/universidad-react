import React from "react";

const TitleNested = React.memo(({ info }) => {
  console.log("%cRender <TitleNested/>", "color:purple");
  return <h1>{info.text}</h1>;
}, // algoritmo de diferenciacion 
(prevProps,nextProps)=>{
  //Si retorna true no se renderiza
  //Si retorna false si se renderiza
  return prevProps.info.text === nextProps.info.text 
});

export default TitleNested;