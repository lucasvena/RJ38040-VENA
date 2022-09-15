import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <Link to="/cart">
            <Icon icon="ant-design:shopping-cart-outlined" width="25" height="25" />
            <span>{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget