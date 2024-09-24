import { useState } from 'react';
import Condicionais from './components/Condicionais';
import CalcularIdade from './components/Calcularidade';
import Professor from './components/Professor';
import './App.css';

function App() {
  let professores = [
    { nome: 'Rangel Xavier', curso: 'SI', ano: '2021' },
    { nome: 'Allen Vidal', curso: 'SI', ano: '2010' },
    { nome: 'Rafael Brito', curso: 'SI', ano: '2009' },
  ];

  return (
    <div>
      {professores.map((prof) => (
        <Professor
          nome={prof.nome}
          curso={prof.curso}
          ano={prof.ano}
        />
      ))}
    </div>
  );
}

export default App;