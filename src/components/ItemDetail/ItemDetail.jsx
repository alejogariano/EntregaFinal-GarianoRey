import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext' 

const ItemDetail = ({ id, nombre, imagen, precio, descripcion }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, imagen, nombre, precio, descripcion
        }

        addItem (item, quantity)
    }

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2>{nombre}</h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className='ItemImg' />
            </picture>
            <section>
                <p className='InfoPrecio'>
                    ${precio}
                </p>
                <p className='InfoDescripcion'>
                    {descripcion}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Finalizar compra</Link>
                    ) : (
                        <ItemCount initial={0} stock={10} description={descripcion} onAdd={handleOnAdd} />
                    )
                }

            </footer>
        </article>
    )
}
export default ItemDetail
