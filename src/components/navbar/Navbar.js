import React from 'react'; 
import CartWidget from '../cartwidget/CartWidget';
import './Navbar.scss';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (
        <nav className='stylesNavbar'>

            <Link to='/'><img className='styleLogo' src="/assets/logo.png" alt=''/></Link>

            <ul className='stylesList'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/productos/anillos'>Anillos</Link>
                </li>
                <li>
                    <Link to='/productos/collares'>Collares</Link>
                </li>
                <li>
                    <Link to='/productos/aros'>Aros</Link>
                </li>
                {/* <li>
                    <Link to='/nosotros'>Nosotros</Link>
                </li>                 */}
            </ul>
            
            <CartWidget/>            

        </nav>
    )
}
