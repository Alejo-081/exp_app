import CabeceraCV from "./Componentes/CabeceraCV";
import Perfil from "./Componentes/Perfil";
import Experiencia from "./Componentes/Experiencia";
import Educacion from "./Componentes/Educacion";

function hoja() {
  return (
    <div>
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
    </div>
  );
}

export default hoja;