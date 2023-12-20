import NavBar from './components/NavBar/NavBar'
import { Container } from "react-bootstrap"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Item from './components/Item/Item';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/CartContext'
import CheckoutBrief from './components/CheckoutBrief/CheckoutBrief';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={ <ItemListContainer />}/>
          <Route exact path='/category/:categoryId' element={ <ItemListContainer />}/>
          <Route exact path='/item/:itemId' element={ <Item />}/>
          <Route exact path='/checkout' element={ <CheckoutBrief /> }/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
