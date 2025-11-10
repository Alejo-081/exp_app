import CabeceraCV from "./Componentes/CabeceraCV";
import Perfil from "./Componentes/Perfil";
import Experiencia from "./Componentes/Experiencia";
import Educacion from "./Componentes/Educacion";
import StackTecnologias from "./Componentes/stackTecnologias";

function hoja() {
  return (
    <div>
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
      <StackTecnologias />
    </div>
  );
}

export default hoja;