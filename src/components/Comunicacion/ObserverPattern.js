import React from "react";
import PubSub from 'pubsub-js'
import Header from "./Header";
import HijoObserver from './HijoObserver';

const boxStyles = {
  padding: "0.5em",
  margin: " 0.5em",
  border: "1px solid gray",
  borderRadius: "0.3em",
  textAlign: "center",
};

class ObserverPattern extends React.Component {

    componentDidMount () {
        PubSub.subscribe('saludo',(e,data)=>{
            alert(data);
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe('saludo');
    }

    handleClick = () => {
        PubSub.publish('otro evento', { title: 'Hola desde <App/>'})
    }

    render() {
    return (
      <div style={boxStyles}>
        <Header title="Observer Pattern" />
        <button onClick={this.handleClick}>Padre</button>
        <HijoObserver styles={boxStyles}/>
      </div>
    );
  }
}
export default ObserverPattern;
