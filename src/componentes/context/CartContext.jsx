import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carInicial = JSON.parse(localStorage.getItem("carrito")) || []; 

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carInicial);

    const agregar = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
            setCarrito(nuevoCarrito);
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    
    return (
        <CartContext.Provider value={{ 
            carrito, 
            agregar, 
            precioTotal,
            cantidadEnCarrito, 
            vaciarCarrito 
            }}>
            {children}
        </CartContext.Provider>
    )
}