import './CartWidgetStyle.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext} from '../../context/CartContext';
import Cart from '../Cart/Cart';


const CartWidget = () => {
    const { totalQuantity } = useContext (CartContext)

    return (
        <Link to= '/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <ShoppingBagIcon />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget