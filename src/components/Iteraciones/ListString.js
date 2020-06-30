import React from "react";

const frutas = ["banana", "manzana", "pera", "sandia", "mango"];

class ListString extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {frutas.map((fruta) => {
            return <li key={fruta}>{fruta}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ListString;
