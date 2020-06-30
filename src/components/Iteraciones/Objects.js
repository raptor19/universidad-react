import React from "react";

class Objects extends React.Component {
  state = {
    user: {
      name: "Cristian",
      surname: "Almiron",
      country: "Argentina",
      age: 28,
      facebook: "Nico Almiron",
    },
  };
  render() {
    const { user } = this.state;
    const keys = Object.keys(user);

    return (
      <div>
        <h3>Iterando propiedades de Objetos</h3>
        <ul>
          {keys.map((key,index) => (
            <li key={index}>
              {key}: {user[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Objects;
