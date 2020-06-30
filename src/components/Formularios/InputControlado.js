import React from "react";

class InputControlado extends React.Component {
  state = {
    text: "El oso yogy",
    tieneError: false,
    color: "#E8E8E8",
  };

  actualizar = (event) => {
    const text = event.target.value;
    
    let color = "green";
    if (text.trim() === "") {
      color = "#E8E8E8";
    }
    if (text.trim !== "" && text.trim().length < 5) {
      color = "red";
    }
    this.setState({ text, color });
    //Propagando datos al componente padre
    this.props.onChange(this.props.name, text)
  };

  render() {
    const styles = {
      border: `1px solid ${this.state.color}`,
      padding: "0.3em 0.6em",
      outline: "none",
    };

    return (
      <div>
        <h2>Inputs Controlados</h2>
        <input
          type="text"
          name={this.props.name}
          id="text-example"
          onChange={this.actualizar}
          value={this.text}
          style={styles}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default InputControlado;
