import React from "react";
import Unicorn from "./Unicorn";
import InputNoControlado from "./InputNoControlado";
import InputControlado from "./InputControlado";
import Select from "./Select";
import Checkbox from "./Checkbox";

class Formularios extends React.Component {
  state = {
    name: "",
    surname: "",
  };
  send = (data) => {
    console.log(data);
  };

  actualizar = (name, data) => {
    this.setState({
      [name]: data,
    });
  };

  render() {
    return (
      <div>
        <h1>Manejo de Formularios</h1>
        <Unicorn />
        <InputNoControlado onSend={this.send} />
        <InputControlado
          onChange={this.actualizar}
          placeholder="Ingresa tu nombre"
          name="name"
        />
        <InputControlado
          onChange={this.actualizar}
          placeholder="Ingresa tu apellido"
          name="surname"
        />
        <h3>Nombre: {this.state.name}</h3>
        <h3>Apellido: {this.state.surname}</h3>
        <Select />
        <Checkbox/>
      </div>
    );
  }
}

export default Formularios;
