import React from "react";
import UserDetails from "./UserDetails";

class MetodoComponentDidUpdate extends React.Component {
  state = {
    id: 1,
  };

  aumentar = () => {
    this.setState((state) => ({ id: state.id + 1 }));
  };

  render() {
    const { id } = this.state;
    return (
      <div>
        <h4>Id: {this.state.id}</h4>
        <button onClick={this.aumentar}>Aumentar</button>
        <UserDetails userId={id} />
      </div>
    );
  }
}
export default MetodoComponentDidUpdate;
