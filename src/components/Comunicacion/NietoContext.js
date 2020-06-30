import React from "react";

const boxStyles = {
  padding: "0.5em",
  margin: " 0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center",
};

const { Consumer } = React.createContext();

class NietoContext extends React.Component {
  handleClick = () => {};

  render() {
    return (
      <Consumer>
        {(context) => {
          return (
            <div style={boxStyles}>
              <p>Nieto</p>
              {context}
              <button onClick={context.addClicks}>
                Disparar ({context.clicks})
              </button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default NietoContext;
