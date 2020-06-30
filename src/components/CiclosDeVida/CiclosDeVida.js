import React from "react";
import MetodoConstructor from "./MetodoConstructor";
//import MetodoComponentDidMount from "./MetodoComponentDidMount";
import MetodoComponentDidUpdate from "./MetodoComponentDidUpdate";
import MetodogetSnapshotBeforeUpdate from "./MetodogetSnapshotBeforeUpdate";
import MetodoShouldComponentUpdate from "./MetodoShouldComponentUpdate";

class CiclosDeVida extends React.Component {
  render() {
    return (
      <div>
        <h1>Ciclos de vida de los componentes</h1>
        <h2>Metodo Constructor</h2>
        <MetodoConstructor num={1200} />
        <MetodoConstructor num={40} />
        <h2>Metodo ComponentDidMount</h2>
        
        <h2>Metodo ComponentDidUpdate</h2>
        <MetodoComponentDidUpdate/>
        <h2>Metodo getSnapshotBeforeUpdate</h2>
        <MetodogetSnapshotBeforeUpdate />
        <h2>Metodo shouldComponentUpdate</h2>
        <MetodoShouldComponentUpdate/>
      </div>
    );
  }
}
export default CiclosDeVida;
