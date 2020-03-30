import React from 'react';
import Pais from './components/pais/'
import Aeroporto from './components/aeroporto/'
import Rota from './components/rota/'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <Pais />
      <Aeroporto />
      <Rota />
    </div>
  );
}

export default App;
