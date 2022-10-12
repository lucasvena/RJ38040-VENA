import React from 'react'; 
import CartWidget from '../cartwidget/CartWidget';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useLoginContext } from '../../context/LogingContext';


export const Navbar = () => {

    const {user, logout} = useLoginContext()
   
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
            </ul>
            
            <CartWidget/>     

            <div className='header-user style-user'>
                <small>Bienvenido: {user.user}</small> 
                <button onClick={logout} className='btn btn-outline-danger'>Salir</button>          
            </div>       
        </nav>

        
    )
}
