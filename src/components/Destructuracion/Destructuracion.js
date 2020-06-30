import React from "react";

class Destructuracion extends React.Component {
  render() {
    const user1 = {
      name: "Almiron Cristian",
      username: "raptor19",
      country: "Argentina",
      social: {
        facebook: "Nico Almiron",
        instagram: "@cristian88gx",
      },
    };

    const saluda = (user) => {
      const { name, country, social: { instagram } } = user;
      const orden = [ 'pizza','te verde', 'pay',124,false,'otro'];
      const [ comida, bebida, postre, ...restantes] = orden;
      console.log(`Hola soy ${name} y vivo en ${country} mi insta es ${instagram} y me gusta la ${comida}, ${bebida} y ${postre} restantes: ${restantes}`);
    };
    return (
      <div>
        <button onClick={saluda(user1)}>Destructuracion</button>
      </div>
    );
  }
}

export default Destructuracion;
