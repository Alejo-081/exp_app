import CabeceraCV from "./CabeceraCV";
import Perfil from "./Perfil";
import Experiencia from "./Experiencia";
import Educacion from "./Educacion";

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