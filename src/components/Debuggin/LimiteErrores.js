import React from "react";

class LimiteErrores extends React.Component {
  state = {
    tieneError: false,
  };
  componentDidCatch(error, errorInfo) {
    this.setState({ tieneError: true, error });
  }
  render() {
    if (this.state.tieneError) {
      return (
        <div>
          Opss! algo ha salido mal recarga o contacta con el equipo de soporte.
          <div
            style={{
              color: "orangered",
            }}
          >
            {this.state.error && this.state.error.toString()}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default LimiteErrores;
