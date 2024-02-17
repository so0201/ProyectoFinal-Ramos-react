import "./itemDetail.css/"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import React, { useContext, useState } from 'react'
import { CartContext } from "../context/CartContext"

const ItemDetail = ({ item }) => {

  const { carrito, agregar } = useContext(CartContext);
  console.log(carrito);

  const { user, edad } = useContext(CartContext);
  console.log(user);
  
  const [cantidad, setCantidad] = useState(1);

  const restar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  const sumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  return (
    <div className='container'>
      <div className='prod-detail'>
        <img src={item.image} alt={item.name} />
        <div>
          <h3 className='title'>{item.name}</h3>
          <p className='desc'>{item.description}</p>
          <p className='categoria'>Categoria: {item.category}</p>
          <p className='precio'>Precio ${item.price}</p>
          <ItemCount 
          cantidad={cantidad} 
          sumar={sumar} 
          restar={restar} 
          agregar={() => {agregar(item, cantidad)}} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail