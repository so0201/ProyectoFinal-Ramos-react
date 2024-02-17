import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './Carrito.css';

const Carrito = () => {

    const { carrito, vaciarCarrito} = useContext(CartContext);

    const vaciar = () => {
        vaciarCarrito();
    }

  return (
    <>
    <div className='Car'>
        <h1 className='main-title'>Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <h2>{prod.name}</h2>
                    <p>Cantidad: {prod.cantidad}</p>
                    <h2>Precio Total: ${prod.price * prod.cantidad}</h2>
                    <br />
                </div>
            ))
        }

        {
            carrito.length > 0 ?
            <>
                <button className='botonCar' onClick={vaciar}>Vaciar</button>
            </> :
            <h2>El carrito esta vacio :(</h2>
        }

        </div>
    </>
  )
}

export default Carrito