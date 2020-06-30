import React from "react";
import PubSub from "pubsub-js";

const boxStyles = {
  padding: "0.5em",
  margin: " 0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center",
};

class BisnietoObserver extends React.Component {
  state = {
    message: "******",
  };

  componentDidMount() {
    PubSub.subscribe("otro evento", (e, data) => {
      this.setState({
        message: data.title,
      });
    });
  }

  componentWillUnmount() {
      PubSub.unsubscribe('otro evento');
  }

  handleClick = () => {
    PubSub.publish("saludo", "Hola desde el bisnieto");
  };

  render() {
    return (
      <div style={boxStyles}>
        <p>Mensaje: {this.state.message}</p>
        <button onClick={this.handleClick}>BISNIETO</button>
      </div>
    );
  }
}
export default BisnietoObserver;
