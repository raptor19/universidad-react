import React from "react";
import Boton from "./Boton";
import LimiteErrores from "./LimiteErrores";

class Debuggin extends React.Component {
  render() {
    return (
      <div>
        <h1>Debuggin y manejo de errores</h1>
        <LimiteErrores>
          <Boton />
        </LimiteErrores>
      </div>
    );
  }
}
export default Debuggin;
