import React,{Fragment,useState,useEffect} from 'react';
import {API_URL,API_KEY} from '../config';
import Formulario from './Formulario';
import ListarFotos from './ListarFotos';
import Error from './Error';

function Mars() {

  

  const [busqueda, guardarBusqueda] = useState({
    sol:'',
    fecha:'',
    camara:''
  });

  const {sol, fecha, camara} = busqueda;

  const [consultar, guardarConsultar] =useState(false);
  const [resultado, guardarResultado] = useState([]);
  const [caso, guardarCaso] =useState('');
  const [errorAPI, guardarErrorAPI]=useState(false);

 
  
  useEffect(() => {

    

    const consultarAPI = async()=>{

      if (consultar && caso === 'sol'){
        
        const URL=`${API_URL}sol=${sol}&api_key=${API_KEY}`;  


        const respuesta = await fetch(URL);
        const datosRespuesta = await respuesta.json();
        
        guardarResultado(datosRespuesta.photos);

        guardarConsultar(false);

        if(datosRespuesta.photos.length===0){
          guardarErrorAPI(true);
        }else{
          guardarErrorAPI(false);
        }
      }
      
      if (consultar && caso === 'fecha'){
        const URL=`${API_URL}&earth_date=${fecha}&api_key=${API_KEY}`;  

        
        const respuesta = await fetch(URL);
        const datosRespuesta = await respuesta.json();
        
        guardarResultado(datosRespuesta.photos);

        guardarConsultar(false);

        if(datosRespuesta.photos.length===0){
          guardarErrorAPI(true);
        }else{
          guardarErrorAPI(false);
        }
      }

      if (consultar && caso === 'all'){
        const URL=`${API_URL}sol=${sol}&camera=${camara}&earth_date=${fecha}&api_key=${API_KEY}`;

        
        const respuesta = await fetch(URL);
        const datosRespuesta = await respuesta.json();
        
        guardarResultado(datosRespuesta.photos);

        guardarConsultar(false);

        if(datosRespuesta.photos.length===0){
          guardarErrorAPI(true);
        }else{
          guardarErrorAPI(false);
        }
      }

      if (consultar && caso === 'solYFecha'){
        const URL=`${API_URL}sol=${sol}&earth_date=${fecha}&api_key=${API_KEY}`;

        
        const respuesta = await fetch(URL);
        const datosRespuesta = await respuesta.json();
        
        guardarResultado(datosRespuesta.photos);

        guardarConsultar(false);

        if(datosRespuesta.photos.length===0){
          guardarErrorAPI(true);
        }else{
          guardarErrorAPI(false);
        }
      }
      if (consultar && caso === 'solYCamara'){
        const URL=`${API_URL}sol=${sol}&camera=${camara}&api_key=${API_KEY}`;

        
        const respuesta = await fetch(URL);
        const datosRespuesta = await respuesta.json();
        
        guardarResultado(datosRespuesta.photos);

        guardarConsultar(false);

        if(datosRespuesta.photos.length===0){
          guardarErrorAPI(true);
        }else{
          guardarErrorAPI(false);
        }
      }
      if (consultar && caso === 'camaraYFecha'){
        const URL=`${API_URL}camera=${camara}&earth_date=${fecha}&api_key=${API_KEY}`;

        
        const respuesta = await fetch(URL);
        const datosRespuesta = await respuesta.json();

        guardarResultado(datosRespuesta.photos);

        guardarConsultar(false);

        if(datosRespuesta.photos.length===0){
          guardarErrorAPI(true);
        }else{
          guardarErrorAPI(false);
        }
      }

      if (consultar && caso === 'soloCamara'){

        guardarConsultar(false);
        guardarErrorAPI(true);
      }

    }
    consultarAPI();

  }, [consultar]);

 


  
  //carga condicional de componente
  let componente;
  
  if(errorAPI){
    componente=<Error
                mensaje="No se encontrarón datos"
                />
  }else{
    componente=<ListarFotos
                resultado={resultado}
                />
  }


  return (
    
    <Fragment>
      <div className="row">
          <div className="col m6 push-m1">
            <Formulario
              busqueda={busqueda}
              consultar={consultar}
              caso={caso}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
              guardarCaso={guardarCaso}
            />
          </div>

           <div className="col m6">
              {componente}
          </div>
      </div>
    </Fragment>
  );
}

export default Mars;