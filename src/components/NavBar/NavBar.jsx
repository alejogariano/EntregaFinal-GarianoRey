import CartWidget from '../CartWidget/CartWidget'
import './NavBarStyle.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to='/'> <h1>El Club del Mate</h1> </Link>

            <div className='Categories'>
                <ul>
                    <li> <NavLink to={`/category/mates`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Mates</NavLink> </li>
                    <li> <NavLink to={`/category/termos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Termos</NavLink> </li>
                    <li> <NavLink to={`/category/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink> </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar