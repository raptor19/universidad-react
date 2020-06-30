import React from "react";

class MetodoConstructor extends React.Component {
  constructor(props) {
    super(props);
    // Pasar el correcto contexto a los metodos de la clase
    this.agregar = this.agregar.bind(this);
    // Crear refs del Dom
    this.title = React.createRef();
    // Inicializar valores del estado que provengan desde las props
    this.state = {
      message: "Hola Ninja",
      num: props.num,
    };
  }

  agregar() {
    console.log(this.title);
    this.setState((state) => ({
      num: state.num + 1,
    }));
  }

  render() {
    return (
      <div>
        <h3 ref={this.title}>Mensaje: {this.state.message}</h3>
        <button onClick={this.agregar}>Clicks {this.state.num}</button>
      </div>
    );
  }
}
export default MetodoConstructor;
