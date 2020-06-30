import React from "react";
const users = [
  { id: 1, name: "Usuario1", country: "Country1" },
  { id: 2, name: "Usuario2", country: "Country2" },
  { id: 3, name: "Usuario3", country: "Country3" },
  { id: 4, name: "Usuario4", country: "Country4" },
  { id: 5, name: "Usuario5", country: "Country5" },
  { id: 6, name: "Usuario6", country: "Country6" },
];
class PropKeys extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Iternado con PropKeys</h3>
        {users.map((user) => (
          <li key={user.id}>Name: {user.name}</li>
        ))}
      </React.Fragment>
    );
  }
}
export default PropKeys;
