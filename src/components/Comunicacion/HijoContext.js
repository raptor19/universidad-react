import React from "react";
import NietoContext from './NietoContext';

const boxStyles = {
  padding: "0.5em",
  margin: " 0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center",
};

class HijoContext extends React.Component {
  render() {
    return <div style={boxStyles}>
        <p>Hijo</p>
        <NietoContext/>
    </div>;
  }
}
export default HijoContext;
