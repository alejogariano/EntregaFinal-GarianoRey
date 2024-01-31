import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const ItemDetail = ({ nombre, imagen, precio, descripcion }) => {
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
                    {precio}
                </p>
                <p className='InfoDescripcion'>
                    {descripcion}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={0} stock={10} description={descripcion} onAdd={(quatity) => console.log('Cantidad agregada', quatity)} />
            </footer>
        </article>
    )
}
export default ItemDetail
