import React,{Fragment} from 'react';
import styled from '@emotion/styled';
import img from './mars.jpg';
import git from './github.png';

const Imagen = styled.img`
  max-width: 80%;
  margin-top: 3rem;
  
`;

const Github = styled.img`
  max-width: 4%;
`;

const About = () => {
    return (
        <Fragment>
            <div className="row">
              <div className="col s6 m9 push-m1">
                    <Imagen
                      src={img}
                    />
                    <p>Esta app consulta imágenes recopiladas por los rovers Curiosity, Opportunity y Spirit de la NASA en Marte.</p>
                    <p>
                      Las fotos están organizadas por el sol (rotación o día marciano) en el que se tomaron, contando desde la fecha
                      de aterrizaje del rover. Una foto tomada en el sol marciano número 1000 de Curiosity 
                      explorando Marte, por ejemplo, tendrá un atributo de sol de 1000. 
                      Si, en cambio, se prefiere buscar por la fecha de la Tierra en la que se tomó la foto, también es posible.
                      Junto con la consulta por fecha, los resultados también pueden ser filtrados por la cámara con la que se tomarón
                      cada cámara tiene una función y una perspectiva única, y se denominan de la siguiente manera:
                    </p>
                  
                    <ol>
                      <li>Cámara delantera para evitar peligros</li>
                      <li>Cámara trasera para evitar peligros</li>
                      <li>Cámara de mástil</li>
                      <li>Complejo de cámara y química</li>
                      <li>Lector de imágenes Mars Hand Lens</li>
                      <li>Generador de imágenes Mars Descent</li>
                      <li>Cámara de navegación</li>
                      <li>Cámara panorámica</li>
                      <li>Espectrómetro de emisión térmica en miniatura (Mini-TES)</li>
                    </ol>
              </div>
          </div>
          
          <div>
            <center>

            
              <a href="https://bit.ly/3jbcaU6" target="_blank">
              <Github
                src={git}
              />
              </a>
            </center>
          </div>
        </Fragment>
     );
}
 
export default About;