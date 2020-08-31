import React,{Fragment,useState} from 'react';
import Formulario from './Components/Formulario'

function App() {

  const [busqueda, guardarBusqueda] = useState({
    sol:'',
    fecha:'',
    camara:''
  });

  return (
    <Fragment>
      <h1>Mars</h1>
      <div className="row">
          <div className="col m6 push-m1">
            <Formulario
            />
          </div>

           <div className="col m6 ">
            <h2>Resultado</h2>
          </div>

      </div>
    </Fragment>
  );
}

export default App;
