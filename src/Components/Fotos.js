import React from 'react';

const Fotos = ({data}) => {
    //extraer la data
    const {id,sol,camera,img_src,earth_date,rover}=data;

    return ( 
        <div className="card-image">
            <img src={img_src} />
            <span className="card-title">{camera.full_name}</span>
        </div>
     );
}
 
export default Fotos;