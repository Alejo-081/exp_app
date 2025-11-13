import React from 'react';

const Experiencia = ({ items }) => {
  return (
    <section>
      <h2>Experiencia</h2>
      <ul>
        {items.map(({ id, cargo, empresa, periodo }) => (
          <li key={id}>
            <strong>{cargo}</strong> - {empresa} ({periodo})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiencia;
