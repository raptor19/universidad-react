import React from "react";
import ListObjets from "./ListObjets";
import ListString from "./ListString";
import Objects from "./Objects";
import PropKeys from "./PropKeys";
import ListComponents from "./ListComponents";

class Iteraciones extends React.Component {
  render() {
    return (
      <div>
        <ListString />
        <ListObjets />
        <Objects />
        <PropKeys/>
        <ListComponents/>
      </div>
    );
  }
}

export default Iteraciones;
