import React from 'react'
import Item from '../Item/Item'

const ItemList = ( {productos} ) => {
  return (
    <>
        <h2>Productos</h2>

        <div className="productos">
            { productos.map((products) => <Item productos={products} key={products.id}/>)}
        </div>
    </>
  )
}

export default ItemList