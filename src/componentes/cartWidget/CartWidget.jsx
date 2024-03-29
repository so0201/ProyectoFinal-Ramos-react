import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);
  const precioUnitario = 10;

  return (
    <>
      <Link to="/cart">
        Carrito
        <span className='num'> {cantidadEnCarrito()} </span>
      </Link>
    </>
  );
};

export default CartWidget;
