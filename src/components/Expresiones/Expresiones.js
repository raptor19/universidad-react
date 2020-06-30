import React from "react";

const Expresiones = () => {
  //const name = 'Almiron Cristian';
  const usuario = {
    name: "Almiron Cristian",
    age: 28,
    country: "Argentina",
  };

  const getInfo = (user) => {
    return `Mi nombre es ${user.name} y soy de ${user.country}`;
  };

  return (
    <div>
      <hr/>
      <h1>Expresiones </h1>
      <h2>Hola! {usuario.name}!!</h2>
      <p>
        Tengo: {usuario.age} años de edad y el doble de mi edad es{" "}
        {usuario.age * 2} años
      </p>
      <p>{getInfo(usuario)}</p>
      <hr/>
    </div>
  );
};

export default Expresiones;
