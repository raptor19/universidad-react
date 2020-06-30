import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";

const SearchProduct = () => {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);

  const entrada = useRef();

  useEffect(() => {
    //Debounce
    setTimeout(() => {
      if (name === entrada.current.value) {
        //Solicitud Http
        fetch(
          "https://universidad-react-api-test.luxfenix.now.sh/products?name=" +
            name
        )
          .then((res) => res.json())
          .then((data) => setProducts(data.products));
      }
    }, 600);
  }, [name]);

  const handleInput = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <Header title='Buscador de Productos'/>
      <input
        type="text"
        placeholder="Ingresar nombre del producto"
        onChange={handleInput}
        ref={entrada}
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchProduct;
