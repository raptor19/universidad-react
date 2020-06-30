import React, { useEffect, useState } from "react";

const HttpUseEffect = () => {
  const [users, setUsers] = useState([]);
  const [isFetching, setFetching] = useState(true);

  //Para que solo haga una vez la peticion debo pasar un array vacio como segundo parametro
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFetching(false);
      });
  }, []);

  return (
    <div>
      {isFetching && <h1>Cargando...</h1>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HttpUseEffect;
