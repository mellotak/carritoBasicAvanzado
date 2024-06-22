import React from 'react';
import { Link } from 'react-router-dom';

const CartMenu = ({ cartItems, onClose, onAddToCart, onRemoveFromCart, onReduceQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-menu">
      <button className="close-button" onClick={onClose}>X</button>
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.product.id}>
              <div className="cart-item">
                <span className="cart-item-name">{item.product.name} x {item.quantity}</span>
                <div className="quantity-controls">
                  <button onClick={() => onReduceQuantity(item.product.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onAddToCart(item.product, 1)}>+</button>
                  <button className="remove-button" onClick={() => onRemoveFromCart(item.product.id)}>Eliminar</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <strong>Total: ${total}</strong>
      </div>
      <div className="cart-menu-actions">
        <button onClick={onClose}>Seguir Comprando</button>
        <Link to="/cart" onClick={onClose}>Ver Carrito</Link>
        <Link to="/invoice" onClick={onClose}>Pagar</Link>
      </div>
    </div>
  );
};

export default CartMenu;
