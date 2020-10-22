import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({
  busqueda,
  guardarBusqueda,
  guardarConsultar,
  guardarCaso,
}) => {
  const { sol, camara, fecha } = busqueda;

  const [errorFormulario, guardarErrorFormulario] = useState(false);

  //Captura el cambio de valores en los campos
  const handleChange = (event) => {
    //Actualizar el state
    guardarBusqueda({
      ...busqueda,
      [event.target.name]: event.target.value,
    });
  };

  //Cuando el usuario da submit
  const handleSubmmit = (e) => {
    e.preventDefault();

    //validar
    if (fecha !== "" && camara !== "" && sol !== "") {
      guardarCaso("all");
      guardarConsultar(true);
    } else if (sol !== "" && camara.trim() === "" && fecha === "") {
      guardarCaso("sol");
      guardarConsultar(true);
      return;
    } else if (fecha !== "" && camara.trim() === "" && sol === "") {
      guardarCaso("fecha");
      guardarConsultar(true);
      return;
    } else if (sol.trim() === "" && fecha.trim() === "" && camara !== "") {
      guardarCaso("soloCamara");
      guardarConsultar(true);
      return;
    } else if (sol !== "" && fecha !== "" && camara.trim() === "") {
      guardarCaso("solYFecha");
      guardarConsultar(true);
      return;
    } else if (sol !== "" && camara !== "" && fecha.trim() === "") {
      guardarCaso("solYCamara");
      guardarConsultar(true);
      return;
    } else if (camara !== "" && fecha !== "" && sol.trim() === "") {
      guardarCaso("camaraYFecha");
      guardarConsultar(true);
      return;
    } else if (
      camara.trim() === "" &&
      fecha.trim() === "" &&
      sol.trim() === ""
    ) {
      guardarErrorFormulario(true);
      return;
    }
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmmit}>
        {" "}
        {errorFormulario ? (
          <Error mensaje="Selecciona al menos un campo" />
        ) : null}
        <div className="row">
          <div className="input-field col s3">
            <input
              name="sol"
              id="sol"
              type="text"
              value={sol}
              onChange={handleChange}
              placeholder="Ejemplo: 223"
            />
            <label htmlFor="sol">Sol Marciano:</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s5">
            <select
              name="camara"
              id="camara"
              value={camara}
              onChange={handleChange}
            >
              <option value="">Selecciona una camara</option>
              <option value="fhaz">
                Cámara delantera para evitar peligros
              </option>
              <option value="rhaz">Cámara trasera para evitar peligros</option>
              <option value="mast">Cámara de mástil</option>
              <option value="chemcam">Complejo de cámara y química</option>
              <option value="mahli">Lector de imágenes Mars Hand Lens</option>
              <option value="mardi">Generador de imágenes Mars Descent</option>
              <option value="navcam">Cámara de navegación</option>
              <option value="pancam">Cámara panorámica</option>
              <option value="minities">
                Espectrómetro de emisión térmica en miniatura (Mini-TES)
              </option>
            </select>
            <label>Camara</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s3">
            <input
              placeholder=""
              name="fecha"
              id="fecha"
              type="date"
              value={fecha}
              onChange={handleChange}
            />
            <label htmlFor="fecha">Fecha:</label>
          </div>
        </div>
        <div className="row">
          <div className="col s3">
            <button className="btn waves-effect waves-light" type="submit">
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
