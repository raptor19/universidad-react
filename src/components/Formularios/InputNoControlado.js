import React from "react";

class InputNoControlado extends React.Component {
  nombre = React.createRef();
  email = React.createRef();

  handleClick = () => {
    const nombre = this.nombre.current.value
    const email = this.email.current.value
    //Manejo de datos 
    this.props.onSend({ nombre, email})
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="nombre"
          id="name"
          ref={this.nombre}
          placeholder="ingresa tu nombre"
        />
        <input
          type="email"
          name="email"
          id="email"
          ref={this.email}
          placeholder="ingresa tu email"
        />
        <button onClick={this.handleClick}>Guardar</button>
      </div>
    );
  }
}

export default InputNoControlado;
