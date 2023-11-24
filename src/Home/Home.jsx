import { useEffect, useState } from "react";
import "./Home.css";
import { Formulario } from "../Formulario/Formulario";
import { Descripcion } from "../Descripcion/Descripcion";
import { Carrousel } from "../Carrousel/Carrousel";
import { Footer } from "../Footer/Footer";
import { servicioHabitacion } from "../../services/servicioHabitacion";


export function Home() {
  const [estaCargando, setestaCargando] = useState(true);
  const [tiempo, setTiempo] = useState(0);

  useEffect(
    function () {
      if (tiempo > 0) {
        setestaCargando(false);
      } else {
        setestaCargando(true);
      }
    },
    [tiempo]
  );

  setTimeout(function () {
    setTiempo(1);
  }, 2000);
  if (estaCargando) {
    return (
      <>
      <h1 className="text-dark p-5 text-center">Pagina Cargando......</h1>
      </>
    );
  }
  return (
    <>
      <div className="bannerDos">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 text-white">
            <Descripcion />
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="row">
          <div className="col-12 col-md-4 text-white">
            <h3 className="fw-bold fst-italic">Reserva Con Nosotros</h3>
            <hr className="h-10"></hr>
            <Formulario />
          </div>
        </div>
      </div>
      <Carrousel/>
      <Footer/>
    </>
  );
}
