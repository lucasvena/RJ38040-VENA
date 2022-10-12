import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartWidget.scss';

const CartWidget = () => {

    const { cartQuantity, cart } = useContext(CartContext)

    return (
        <Link to="/cart" className= {`widget ${cart.length > 0 ? 'widget-visible' : ''} style-widget`}>
            <Icon icon="ant-design:shopping-cart-outlined"/>
            <span>{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget