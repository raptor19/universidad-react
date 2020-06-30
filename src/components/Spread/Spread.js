import React from 'react';

const Spread = () => {
    const perfil = {
        nombre: "Cristian",
        apellido: "Almiron",
      };
      
      const region = {
        region: "Argentina",
      };
      
      const social = {
        twitter: "@Raptor19",
      };

      const frutasVerdes = ['kiwi','limon','uva']
      const frutasRojas = ['Frutilla','cereza','sandia']

      const frutas = [
          ...frutasVerdes,
          ...frutasRojas
      ]
      
      const resultado = {
          ...region,
          ...perfil,
          ...social
      };
      
      console.log(resultado);
      console.log(frutas);
      
    return (
        <div>
            <p>Spread</p>
        </div>
    );
}
 
export default Spread;