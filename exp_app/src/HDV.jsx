import React from 'react';
import CabeceraCV from './componentes/CabeceraCV';
import Perfil from './componentes/Perfil';
import Experiencia from './componentes/Experiencia';
import Educacion from './componentes/Educacion';
import { personal, resumen, experiencias, educacion } from './data';

function App() {
  return (
    <div>
      <CabeceraCV
        nombre={personal.nombre}
        cargo={personal.cargo}
        ciudad={personal.ciudad}
        contacto={personal.contacto}
      />

      <Perfil resumen={resumen} />
      <Experiencia items={experiencias} />

      <Educacion items={educacion} />
    </div>
  );
}

export default App;
