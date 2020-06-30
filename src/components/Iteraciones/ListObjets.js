import React from "react";

class ListObjects extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Remera lisa",
        colors: ["#467367", "#05fd88", "#a706ee"],
        price: 500,
      },
      {
        id: 2,
        name: "Camisa de Vestir",
        colors: ["#467367", "#05fd88", "#a706ee"],
        price: 1000,
      },
      {
        id: 3,
        name: "Jean elastizado",
        colors: ["#467367", "#05fd88", "#a706ee"],
        price: 1500,
      },
      {
        id: 4,
        name: "Buzo canguro",
        colors: ["#467367", "#05fd88", "#a706ee"],
        price: 3000,
      },
    ],
  };

  render() {
    return (
      <div>
        <h3>Iterando listas de objetos</h3>
        <div>
          {this.state.products.map((product) => {
            return (
              <div key={product.id}>
                <p>Id: {product.id}</p>
                <p>Nombre: {product.name}</p>
                <p>Precio: ${product.price}</p>
                <p>
                  Colores:{" "}
                  {product.colors.map((color) => {
                    return (
                      <span
                        style={{
                          width: "13px",
                          height: "13px",
                          borderRadius: "0.1em",
                          border: "1px solid gray",
                          display: "inline-block",
                          margin: "0.1em",
                          background: color,
                        }}
                        key={color}
                      ></span>
                    );
                  })}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListObjects;
