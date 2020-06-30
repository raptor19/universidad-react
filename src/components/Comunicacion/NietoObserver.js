import React from "react";
import BisnietoObserver from "./BisnietoObserver";

const boxStyles = {
    padding: "0.5em",
    margin: " 0.5em",
    border: "1px solid gray",
    borderRadius: "0.3em",
    textAlign: "center",
  };

class NietoObserver extends React.Component {
  render() {
    return (
      <div style={boxStyles}>
        <BisnietoObserver />
      </div>
    );
  }
}
export default NietoObserver;
