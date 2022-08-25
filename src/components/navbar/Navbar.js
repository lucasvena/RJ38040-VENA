import React from 'react'; 
import CartWidget from '../cartwidget/CartWidget';
import './Navbar.scss';

export const Navbar = () => {

    return (
        <nav className='stylesNavbar'>

            <img className='styleLogo' src="/assets/logo.png" alt=''/>

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
            
            <CartWidget/>            

        </nav>
    )
}
