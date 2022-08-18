import React from 'react'; 
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className='stylesNavbar'>
            <h4>TÍTULO TIENDA</h4>

            <ul className='stylesList'>
                <li>
                    <a href='./app.js'>Home</a>
                </li>
                <li>
                    <a href='./app.js'>Catálogo</a>
                </li>
                <li>
                    <a href='./app.js'>Quienes somos</a>
                </li>
                <li>
                    <a href='./app.js'>Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;