import './CartWidget.css';
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()
    
    return (
        <Link to='/cart' className='CartWPadre'>
            <img className='CartW' src='/img/logoNavBar.png' alt='cart-widget'  />
            { quantity }
        </Link>
    );
}

export default CartWidget