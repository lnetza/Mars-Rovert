import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './Components/Formulario';
import ListarFotos from './Components/ListarFotos';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    sol:'',
    fecha:'',
    camara:''
  });

  const {sol, fecha, camara} = busqueda;

  const [consultar, guardarConsultar] =useState(false);
  const [resultado, guardarResultado] = useState([]);

  useEffect(() => {

    const consultarAPI = async()=>{
      if (consultar){
        const apiID='Zd0CREJIccbZtbJNBaeDm0wey9EAgharcDnOM0cL';
        const URL=`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camara}&earth_date=${fecha}&api_key=${apiID}`;

        const respuesta = await fetch(URL);
        const datosRespuesta = await respuesta.json();
        

        guardarResultado(datosRespuesta.photos);

        guardarConsultar(false);
      }
    }
    consultarAPI();

  }, [consultar]);



  return (
    <Fragment>
      <h1>Mars</h1>
      <div className="row">
          <div className="col m6 push-m1">
            <Formulario
              busqueda={busqueda}
              consultar={consultar}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
              
            />
          </div>

           <div className="col m6">
            <ListarFotos
              resultado={resultado}
            />
          </div>

      </div>
    </Fragment>
  );
}

export default App;
