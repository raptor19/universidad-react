import React from 'react';
import './App.css';
import Expresiones from './components/Expresiones/index';
import Props from './components/Props/index';
import Spread from './components/Spread/index';
import Eventos from './components/Eventos/index';
import Condicionales from './components/Condicionales/index'
import Destructuracion from './components/Destructuracion/index';
import Fragment from './components/Fragment/index';
import Proptypes from './components/Proptypes/index';
import Iteraciones from './components/Iteraciones/index';
import Refs from './components/Refs/index';
import Formularios from './components/Formularios/index';
import Debuggin from './components/Debuggin/index';
//import PeticionesHttp from './components/PeticionesHttp/index';
import CiclosDeVida from './components/CiclosDeVida/index';
import Comunicacion from './components/Comunicacion/index';
import Hooks from './components/Hooks';

function App() {
  return (
    <div className="App">
      <Expresiones/>
      <Props/>
      <Spread/>
      <Eventos/>
      <Condicionales/>
      <Destructuracion/>
      <Fragment/>
      <Proptypes/>
      <Iteraciones/>
      <Refs/>
      <Formularios/>
      <Debuggin/>
      <CiclosDeVida/>
      <Comunicacion/>
      <Hooks/>
    </div>
  );
}

export default App;
