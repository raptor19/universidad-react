import React, { useState } from "react";
import Header from "./Header";
import useSizes from "./useSizes";
import useFetch from "./useFetch";

const HookPersonalizado = () => {
  const [clicks, setClicks] = useState(1);
  const { height, width } = useSizes();
  const [users, isLoading] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [user, isUser] = useFetch(
    "https://jsonplaceholder.typicode.com/users/"
   + clicks, {});
  const add = () => {
    setClicks(clicks + 1);
  };
  return (
    <div>
      <Header title="Hooks Personalizados" />
      <h3>
        Width: {width}px Height: {height}px
      </h3>
      {isLoading && <h2>Cargando...</h2>}
      <h2>Hook Personalizados para hacer peticiones Http</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {isUser && <h2>Cargando...</h2>}
      <button onClick={add}>Clicks({clicks})</button>
      <h3>Name: {user.name} Phone: {user.phone}</h3>
    </div>
  );
};

export default HookPersonalizado;
