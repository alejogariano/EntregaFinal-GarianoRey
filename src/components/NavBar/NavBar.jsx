import CartWidget from '../CartWidget/CartWidget'
import './NavBarStyle.css'
function NavBar() {
    return (
        <nav>
            <h1>El Club del Mate</h1>

            <div>
                <ul>
                    <li><button>Inicio</button></li>
                    <li><button>Tienda</button></li>
                    <li><button>Contacto</button></li>
                    <li><button>Blog</button></li>
                    <li><button>Unite al Club</button></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar