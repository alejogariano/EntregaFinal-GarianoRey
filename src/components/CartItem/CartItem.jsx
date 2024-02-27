import React from 'react';

const CartItem = ({ id, nombre, imagen, precio, cantidad }) => {
    return (
        <div className="CartItem">
            <img src={imagen} alt={nombre} className="CartItem__image" />
            <div className="CartItem__details">
                <h2 className="CartItem__name">{nombre} x{cantidad}</h2>
                <p className="CartItem__price">Precio unitario: ${precio}</p>
                <p className="CartItem__quantity">Cantidad: {cantidad}</p>
                <p className="CartItem__subtotal">Subtotal: ${precio * cantidad}</p>
            </div>
        </div>
    );
}


export default CartItem