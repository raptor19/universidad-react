import React from "react";
import BuscadorDePeliculas from "./BuscadorDePeliculas";
import BuscadorDePeliculasAxios from "./BuscadorDePeliculasAxios";
import BuscadorDePeliculasAsyncAwait from "./BuscadorDePeliculasAsyncAwait";

class PeticionesHttp extends React.Component {
  state = {
    users: [],
    cargando: true,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users, cargando: false }))
      .catch((error) => {
        //Manejo de error
        console.log(error);
      });
  }
  render() {
    if (this.state.cargando) {
      return <h1>Cargando...</h1>;
    }
    return (
      <div>
        <h1>Peticiones Http</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              {user.name}
              <a href={`http://${user.website}`}>Website</a>
            </li>
          ))}
        </ul>
        <h2>Peticiones con Fetch</h2>
        <BuscadorDePeliculas />
        <h2>Peticiones con Axios</h2>
        <BuscadorDePeliculasAxios />
        <h2>Peticiones con Axios y Async/Await</h2>
        <BuscadorDePeliculasAsyncAwait />
      </div>
    );
  }
}
export default PeticionesHttp;
