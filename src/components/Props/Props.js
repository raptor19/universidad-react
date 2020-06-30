import React from "react";
//import TarjetaFruta from "./TarjetaFruta";
import TarjetaFrutaClass from "./TarjetaFrutaClass";

const Props = () => {
  return (
    <div>
      <hr/>
      <h1>Props </h1>
      <TarjetaFrutaClass name='Coco' price={5.00}/>
      <TarjetaFrutaClass name='Granada' price={8.00}/>
      <TarjetaFrutaClass name='Sandia' price={2.00}/>
      <TarjetaFrutaClass name='Banana' price={3.00}/>
      <TarjetaFrutaClass name='Manzana' price={4.40}/>
      <TarjetaFrutaClass name='Naranja' price={2.50}/>
      <TarjetaFrutaClass name='Mango' price={7.00}/>
      <hr/>
    </div>
  );
};

export default Props;
