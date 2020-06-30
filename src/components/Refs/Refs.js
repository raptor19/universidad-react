import React from "react";
import Entrada from "./Entrada";
import Graficas from "./Graficas"

class Refs extends React.Component {
  
  render() {
    return (
      <div>
        <h1>React Refs</h1>
        <Entrada />
        <Graficas/>
      </div>
    );
  }
}

export default Refs;
