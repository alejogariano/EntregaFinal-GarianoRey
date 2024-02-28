import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, category, nombre, imagen, precio, descripcion }) => {

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
                    $ {precio}
                </p>
                <p className='InfoDescripcion'>
                    {descripcion}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item

