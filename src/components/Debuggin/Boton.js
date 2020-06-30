import React from "react";

class Boton extends React.Component {
  state = {
    dispararError: false,
  };

  dispatchError = () => {
    this.setState({ dispararError: true });
  };

  render() {
    if (this.state.dispararError) {
      throw new Error("Lo siento he fallado");
    }
    return <button onClick={this.dispatchError}>Boton con Bug</button>;
  }
}

export default Boton;
