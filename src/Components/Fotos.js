import React from 'react';

const Fotos = ({informacion}) => {
    //extraer la data
    const {sol,camera,img_src,earth_date,rover}=informacion;

    return ( 

        <div className="galeria">
                <div className="col s3 m3">
                    <img className="responsive-img materialboxed" src={img_src} />
                    <span className="card-title">{camera.full_name}</span>
                    <p>Sol Marciano:{sol}</p>
                    <span className="card-title">Fecha en tierra: {earth_date}</span>

                </div>
        </div>
     );
}
 
export default Fotos;

