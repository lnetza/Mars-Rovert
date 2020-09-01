import React from 'react';
import Fotos from './Fotos';

const ListarFotos = ({resultado}) => (
    <div className="row">
        {resultado.map(data=>(
            <Fotos
                key={data.id}
                data={data}
            />
        ))}
    </div>
);
 
export default ListarFotos;