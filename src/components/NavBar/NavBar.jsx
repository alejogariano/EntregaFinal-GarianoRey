import CartWidget from '../CartWidget/CartWidget'
import './NavBarStyle.css'
function NavBar () {
    return (
        <nav>
        <h1>El Club del Mate</h1>

        <div>
        <button>Inicio</button>
        <button>Tienda</button> 
        <button>Contacto</button> 
        <button>Blog</button> 
        <button>Unite al Club</button>        
        </div>
        <CartWidget/>
        </nav>
    )
}

export default NavBar