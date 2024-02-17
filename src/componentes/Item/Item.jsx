import React from 'react'
import './Item.css/'

const Item = ( {productos} ) => {
  return (
    <div className="productos">
        <img src={productos.image}/>
        <div>
            <h3>{productos.name}</h3>
            <p>Precio: ${productos.price}</p>
            <p>{productos.desc}</p>
            <a className='ver-mas' href={`/item/${productos.id}`}>Ver Mas</a>
        </div>

    </div>
  )
}

export default Item