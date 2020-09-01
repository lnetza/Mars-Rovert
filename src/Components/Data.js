import React from 'react';

const Data = ({resultado}) => {
    
    const {photos,camera, img_src} = resultado;

    const item = Object.entries(resultado).map((key,i)=>{
        return (
            <p key={i}></p>
        );
    });
    
    return ( 
    <ul class="collection">
        <li class="">
            {item.camera}
        </li>
    </ul>
     );
}
 
export default Data;