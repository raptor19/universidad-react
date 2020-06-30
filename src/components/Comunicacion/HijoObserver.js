import React from "react";
import NietoObserver from "./NietoObserver";

const boxStyles = {
  padding: "0.5em",
  margin: " 0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center",
};

class HijoObserver extends React.Component {
  render() {
    return (
      <div style={boxStyles}>
        <NietoObserver />
      </div>
    );
  }
}
export default HijoObserver;
