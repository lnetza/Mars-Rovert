import React from 'react';

const Formulario = ({busqueda,guardarBusqueda,consultar,guardarConsultar}) => {

    
    const {sol,camara, fecha}=busqueda;

    //Captura el cambio de valores en los campos
    const handleChange= event=>{
        //Actualizar el state
        guardarBusqueda({
            ...busqueda,
            [event.target.name]:event.target.value
        })
    }

    //Cuando el usuario da submit 
    const handleSubmmit = e =>{
        e.preventDefault();

        guardarConsultar(true);
    }

    return ( 
        
        <div className="row"> 
           <form
                onSubmit={handleSubmmit}
           >   
                    <div className="row">
                        <div className="input-field col s3">
                            <input  
                                name="sol"
                                id="sol" 
                                type="text" 
                                value={sol}
                                onChange={handleChange}
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
                                <option value="fhaz">Cámara delantera para evitar peligros</option>
                                <option value="rhaz">Cámara trasera para evitar peligros</option>
                                <option value="mast">Cámara de mástil</option>
                                <option value="chemcam">Complejo de cámara y química</option>
                                <option value="mahli">Lector de imágenes Mars Hand Lens</option>
                                <option value="mardi">Generador de imágenes Mars Descent</option>
                                <option value="navcam">Cámara de navegación</option>
                                <option value="pancam">Cámara panorámica</option>
                                <option value="minities">Espectrómetro de emisión térmica en miniatura (Mini-TES)</option>
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
}
 
export default Formulario;