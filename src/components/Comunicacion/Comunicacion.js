import React from "react";
import MetodosDeInstancia from "./MetodosDeInstancia";
import ParentComponent from "./ParentComponents";
import ObserverPattern from "./ObserverPattern";
import Context from "./Context";

class Comunicacion extends React.Component {
  render() {
    return <div>
        <h1>Comunicacion entre componentes</h1>
        <MetodosDeInstancia/>
        <ParentComponent/>
        <ObserverPattern/> 
        <Context/>
    </div>;
  }
}
export default Comunicacion;
