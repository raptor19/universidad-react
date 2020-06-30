import React from "react";
//import "./TarjetaFrutaClass.css";
import styles from './TarjetaFruta.module.css';

class TarjetaFrutaClass extends React.Component {
  state = {
    cantidad: 0,
  };

  agregar = () => {
    this.setState({ cantidad: this.state.cantidad + 1 });
  };
  quitar = () => {
    this.setState({ cantidad: this.state.cantidad - 1 });
  };
  limpiar = () => {
    this.setState({ cantidad: 0 });
  };

  render() {
    const hasItems = this.state.cantidad > 0;
    const clases = `styles.TarjetaFruta ${hasItems ? styles['TarjetaFruta-activa'] : ''}`;

    return (
      <div className={clases}>
        <span>-----------------------</span>
        <h3>-Nombre: {this.props.name}</h3>
        <p>-Descripcion: Descripcion de {this.props.name}...</p>
        <p>-Precio: ${this.props.price}</p>
        <p>-Cantidad: {this.state.cantidad}</p>
        <p>-Total: ${this.state.cantidad * this.props.price}</p>
        <button onClick={this.agregar}>+</button>
        <button onClick={this.quitar}>-</button>
        <button onClick={this.limpiar}>Limpiar</button>
        <span>-----------------------</span>
      </div>
    );
  }
}
export default TarjetaFrutaClass;
