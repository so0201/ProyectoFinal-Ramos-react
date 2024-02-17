import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc, doc } from 'firebase/firestore';
import { database } from '../firebase/config';
import "../Contacto.css"

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const Comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido)

        const pedidosREF = collection(database, "pedidos");

        addDoc(pedidosREF, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito([])
            })
    }

    if(pedidoId) {
        return (
            <div className="compra">
                <h1 className="main-compra">GRACIAS POR COMPRAAAAR!!!</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className="contContacto">
        <h1 className="main-title">Finalizar Compra</h1>
        <form className="formulario" onSubmit={handleSubmit(Comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>

  )
}

export default Checkout