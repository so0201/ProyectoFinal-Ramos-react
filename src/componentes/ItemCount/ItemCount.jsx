import React, { useState } from 'react'
import "./ItemCount.css/"
import { Link } from 'react-router-dom'

const ItemCount = ( {cantidad, restar, sumar, agregar} ) => {


  return (
    <div>
        <div className="item-count">
            <button onClick={restar} >-</button>
            <p>{cantidad}</p>
            <button onClick={sumar} >+</button>
        </div>
        <button className='agregar-al-carrito' onClick={agregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount