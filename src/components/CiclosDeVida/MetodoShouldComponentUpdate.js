import React from "react";
import Item from "./Item";

class MetodoShouldComponentUpdate extends React.Component {
  state = {
    list: [],
  };

  agregar = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    const id = Math.random().toString(16);
    const tarea = {
      text,
      id,
    };
    this.setState((state) => ({ list: [...state.list, tarea] }));
    e.target[0].value = "";
    console.log(this.state.list);
  };

  eliminar = (item) => {
      this.setState(state => ({
          list: state.list.filter(_item => {
              return item.id !== _item.id
          })
      }))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.agregar}>
          <input type="text" placeholder="Ingresa tu tarea" />
          <button>Agregar</button>
        </form>
        <div>
            
          {this.state.list.map((item) => (
            <Item key={item.id} item={item} onRemove={this.eliminar}/>
          ))}
        </div>
      </div>
    );
  }
}
export default MetodoShouldComponentUpdate;
