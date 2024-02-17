import React from 'react'
import './NavBar.css/'
import { Link } from 'react-router-dom'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {
    return (
        <>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/productos/baja">ClaseBaja</Link>
                <Link to="/productos/media">ClaseMedia</Link>
                <Link to="/productos/alta">ClaseAlta</Link>
                <CartWidget />
            </nav>
        </>
    )
}

export default NavBar