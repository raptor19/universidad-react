import React from "react";

class Events extends React.Component {
  state = {
    widht: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handlerResize);
  }

  handlerResize = () => {
    this.setState({ widht: window.innerWidth });
  };

  render() {
    return (
      <div>
        <h3>Eventos con ComponentDidMount {this.state.widht}</h3>
      </div>
    );
  }
}
export default Events;
