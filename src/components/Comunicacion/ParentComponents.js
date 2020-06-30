import React from "react";
import Header from "./Header";
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const boxStyles = {
  padding: "0.5em",
  margin: " 0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center",
};

const blueStyles = {
  ...boxStyles,
  border: "1px solid blue",
};

const redStyles = {
  ...boxStyles,
  border: "1px solid red",
};

class ParentComponent extends React.Component {
  state = {
    countA: 0,
    countB: 0,
  };

  handleAddA = () => {
    this.setState((state) => ({
      countA: state.countA + 1,
    }));
    console.log(this.state.countA);
  };

  handleAddB = () => {
    this.setState((state) => ({
      countB: state.countB + 2,
    }));
    console.log(this.state.countB);
  };

  render() {
    const { countA, countB } = this.state
    return (
      <div>
        <div style={boxStyles}>
          <Header title="Parent Component" />
          <ComponentA num={countA} onAdd={this.handleAddB} styles={blueStyles}/>
          <ComponentB num={countB} onAdd={this.handleAddA} styles={redStyles}/>
        </div>
      </div>
    );
  }
}
export default ParentComponent;
