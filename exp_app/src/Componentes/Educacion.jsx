import React from 'react';

const Educacion = ({ items }) => {
  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {items.map(({ id, titulo, institucion, periodo }) => (
          <li key={id}>
            <strong>{titulo}</strong> - {institucion} ({periodo})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Educacion;
