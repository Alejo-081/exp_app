import React from 'react';

const CabeceraCV = ({ nombre, cargo, ciudad, contacto }) => {
  const { email, telefono, linkedin } = contacto || {};

  return (
    <header>
      <h1>{nombre}</h1>
      <p>{cargo}</p>
      <p>{ciudad}</p>
      <p>
        {email} | {telefono} | <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">{linkedin}</a>
      </p>
    </header>
  );
};

export default CabeceraCV;