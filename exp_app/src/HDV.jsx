import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './HDV.css'

function hoja() {
  return (
    <main className="container">
      <header className="header">
        <div className="perfil">
          <div className="foto">
            <img
              src="/public/perfil.jpg"
              alt="Foto de perfil"
            />
          </div>
          <div className="info">
            <h1>Alejandro Gomez Garcia</h1>
            <p className="cargo">Desarrollador De Software</p>
          </div>
        </div>

        <div className="contacto">
          <p>📍 Colombia, Medellin</p>
          <p>✉️ 444alejogarcia@gmail.com · +57 300 299 3827</p>
          <p>🔗 linkedin.com/in/alejo.garcia</p>
        </div>
      </header>

      {/* Sección principal */}
      <section className="contenido">
        <aside>
          <div className="tarjeta">
            <h2>Perfil</h2>
            <p>
              Soy estudiante en formación de Análisis y Desarrollo de Software,
              con interés en adquirir experiencia en el área tecnológica y
              aplicar mis conocimientos en programación y bases de datos.
              Además, cuento con experiencia en atención al cliente, lo que me
              ha permitido desarrollar habilidades de comunicación, orientación
              al usuario y resolución de problemas. Me destaco por mi
              disposición para el aprendizaje continuo, el trabajo en equipo y
              la adaptación a nuevos retos, con el objetivo de aportar valor y
              crecer junto a la empresa.
            </p>
          </div>

          <div className="tarjeta">
            <h2>Habilidades</h2>
            <ul>
              <li>• Html, CSS, Phyton</li>
              <li>• SQL Server, Xampp, MongoDB</li>
              <li>• JavaScript</li>
            </ul>
          </div>

          <div className="tarjeta">
            <h2>Educación</h2>
            <ul>
              <li>
                <strong>2024 -</strong> Atención al Cliente <br />
                Bachillerato - Finca la mesa
              </li>
              <li>
                <strong>2025 -</strong> Actualmente cursando <br />
                Servicio Nacional de Aprendizaje - <br />
                Análisis y Desarrollo de Software
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default hoja
