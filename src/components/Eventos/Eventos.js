import React from "react";
import Hijo from "./Hijo";
import './global.css';

const styles = {
  height: "200px",
  background: "gold",
  padding: "1em",
  boxSizing: "border-box",
};

class Eventos extends React.Component {
  state = {
    clicks: 0,
    video: {
      title: "Mi Video",
      likes: 0,
    },
    x: 0,
    y: 0,
  };

  add = () => {
    this.setState((prevState) => ({
      video: { ...prevState.video, likes: prevState.video.likes + 1 },
    }));
  };

  manejador = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  manejadorHijo = (name) => {
    alert(name);
  };


  render() {
    return (
      <div>
        <h1>{this.state.video.title}</h1>
        <button onClick={this.add}>Clicks: {this.state.video.likes}</button>
        <div style={styles} onMouseMove={this.manejador}>
          <p>x: {this.state.x}</p>
          <p>y: {this.state.y}</p>
        </div>
        <div className="box red">
          <Hijo onSaludar={this.manejadorHijo} />
        </div>
      </div>
    );
  }
}

export default Eventos;
