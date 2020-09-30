import React from 'react';
import Fotos from './Fotos';

const ListarFotos = ({resultado}) => (
    <div className="row">
        {resultado.map(informacion=>(
            <Fotos
                key={informacion.id}
                informacion={informacion}
            />
        ))}
    </div>
);
 
export default ListarFotos;