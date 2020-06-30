import React from "react";

const Saludo = (props) => {
  return (
    <div>
      <div>{props.name && <strong>{props.name}</strong>}</div>

      {props.saluda ? (
        <h1>Hola, tu eres genial !</h1>
      ) : (
        <p>Woops, no hay saludo para ti!</p>
      )}
    </div>
  );
};

export default Saludo;
