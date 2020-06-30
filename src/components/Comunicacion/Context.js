import React from "react";
import Header from "./Header";
//import HijoContext from "./HijoContext";
import UserProfile from "./UserProfile";

const boxStyles = {
  padding: "0.5em",
  margin: " 0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center",
};

// {Provider, Consumer}
const { Provider } = React.createContext();

class Context extends React.Component {
  state = {
    clicks: 0,
  };

  addClicks = () => {
      this.setState(state => ({
        clicks: state.clicks + 1
      }))
  }

  render() {
    return (
      <Provider value={{
          clicks: this.state.clicks,
          addClicks: this.addClicks
      }}>
        <div style={boxStyles}>
          <Header title="React API Context" />
         
          <UserProfile/>
        </div>
      </Provider>
    );
  }
}
export default Context;
