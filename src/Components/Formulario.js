import React from 'react';

const Formulario = () => {
    return ( 
        <div className="row"> 
           <form>   
                    <div className="row">
                    <div className="input-field col s3">
                        <input  id="sol" type="text"/>
                        <label htmlFor="sol">Sol Marciano:</label>
                    </div>
                    </div>

                    <div className="row">
                    <div className="input-field col s3">
                        <select>
                        <option value="">Selecciona una camara</option>
                        <option value="fhaz">FHAZ</option>
                        <option value="rhaz">RHAZ</option>
                        <option value="mast">MAST</option>
                        <option value="chemcam">CHEMCAM</option>
                        <option value="mahli">MAHLI</option>
                        <option value="mardi">MARDI</option>
                        <option value="navcam">NAVCAM</option>
                        <option value="pancam">PANCAM</option>
                        <option value="minities">MINITES</option>
                        </select>
                        <label>Camara</label>
                    </div>
                    </div>

                    <div className="row">
                    <div className="input-field col s3">
                        <input  id="fecha" type="date"/>
                        <label htmlFor="fecha">Fecha:</label>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col s3">
                    <button class="btn waves-effect waves-light" type="submit">Buscar
                        
                    </button>
                    </div>
                    </div>
           </form>
        </div>
      
     );
}
 
export default Formulario;