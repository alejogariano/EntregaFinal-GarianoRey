import './Item.css'

const Item = ({ nombre, imagen, precio, descripcion }) => {
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
                <button className='Option'>Ver detalle</button>
            </footer>
        </article>
    )
}
export default Item
