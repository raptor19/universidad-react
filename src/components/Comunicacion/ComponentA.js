import React from "react";

class ComponentA extends React.Component {
  render() {
    return (
      <div style={this.props.styles}>
        <button onClick={this.props.onAdd}>Component A ( {this.props.num} )</button>
      </div>
    );
  }
} export default ComponentA;
