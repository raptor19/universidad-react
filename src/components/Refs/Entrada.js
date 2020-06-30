import React from "react";

class Entrada extends React.Component {
  
  entrada = React.createRef();
  
  componentDidMount() {
      this.focus();
  }
  focus = () => {this.entrada.current.focus()};

  blur = () => {this.entrada.current.blur()};
  
  render() {
    return (
      <div>
        <input type="text" ref={this.entrada}/>
        <button onClick={this.focus}>Focus</button>
        <button onClick={this.blur}>Blur</button>
      </div>
    );
  }
}

export default Entrada;
