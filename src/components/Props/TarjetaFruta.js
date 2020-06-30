import React from "react";

const TarjetaFruta = (props) => {
  return (
    <div>
      <span>-----------------------</span>
      <h3>-Nombre: {props.name}</h3>
      <p>-Descripcion: Descripcion de {props.name}...</p>
      <p>-Precio: ${props.price}</p>
      <span>-----------------------</span>
    </div>
  );
};

export default TarjetaFruta;
