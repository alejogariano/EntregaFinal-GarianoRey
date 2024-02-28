import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {Link} from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>Carrito vacio</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3 className='Total'>Total: $ {total}</h3>
            <button onClick={() => clearCart()} className='ButtonCart'>Vaciar carrito</button>
            <Link to='/checkout' className='OptionCart'>Continuar con el pago</Link>
        </div>
    )
}

export default Cart