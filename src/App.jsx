import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemList from './componentes/ItemList/ItemList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './componentes/Nosotros'
import Contacto from './componentes/Contacto'
import { CartProvider } from './componentes/context/CartContext';
import Carrito from './componentes/carrito/Carrito';
import Checkout from './componentes/checkout/Checkout'



const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/productos/:category' element={<ItemListContainer />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/cart' element={<Carrito />}/>
            <Route path='/checkout' element={<Checkout />}/>
          </Routes>
        </BrowserRouter>
        </CartProvider>
    </>
  )
}

export default App