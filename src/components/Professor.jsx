import React from 'react';

export default function Professor({ nome, curso, ano }) {
  return (
    <div className="professor">
      <h2>{nome}</h2>
      <p>Curso: {curso}</p>
      <p>Ano de Admissão: {ano}</p>
    </div>
  );
}
