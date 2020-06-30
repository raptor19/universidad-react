import React from "react";
import HijoInstancia from "./HijoInstancia";

class MetodosDeInstancia extends React.Component {
  hijo = React.createRef();

  handleClick = () => {
    this.hijo.current.onDispatchAlert(null,'Hola desde el padre');
  };

  render() {
    return (
      <div>
        <h2>Metodos de Instacia</h2>
        <HijoInstancia ref={this.hijo} />
        <button onClick={this.handleClick}>Padre</button>
      </div>
    );
  }
}
export default MetodosDeInstancia;
