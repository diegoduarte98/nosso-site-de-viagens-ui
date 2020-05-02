import React from 'react';
import Pais from './components/pais/'
import Aeroporto from './components/aeroporto/'
import Rota from './components/rota/'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/menu';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Menu />

      <Switch>
        <Route path="/paises" component={Pais} />
        <Route path="/aeroportos" component={Aeroporto} />
        <Route path="/rotas" component={Rota} />
      </Switch>
    </div>
  );
}

export default App;