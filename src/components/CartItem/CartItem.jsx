import React from 'react';
import './CartItem.css' 

const CartItem = ({ id, nombre, imagen, precio, cantidad }) => {
    return (
        <div className="CartItem">
            <img src={imagen} alt={nombre} className="CartItemImage" />
            <div className="CartItemDetails">
                <h2 className="CartItemName">{nombre} x {cantidad}</h2>
                <p className="CartItemPrice">Precio unitario: ${precio}</p>
                <p className="CartItemQuantity">Cantidad: {cantidad}</p>
                <p className="CartItemSubtotal">Subtotal: ${precio * cantidad}</p>
            </div>
        </div>
    );
}


export default CartItem