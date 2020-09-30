import React from 'react';

import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
    <nav>
        <div className="nav-wrapper blue darken-3">
        <a className="brand-logo center"><Link to={'/'}>Mars Rover Photos</Link></a>
        <ul className="left hide-on-med-and-down">
            <li><Link to={'/'} className="nav-link">Mars</Link></li>
            <li><Link to={'/about'} className="nav-link">Acerca de</Link></li>
        </ul>
        </div>
    </nav>
     );
}
 
export default Nav;


       