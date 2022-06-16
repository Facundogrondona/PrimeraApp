import './App.css';
import NavBar from './components/navBar/NavBar';
import Banner from './components/Banner/Banner';
import Sobre from './components/Sobre/Sobre';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './notification/Notification';



const App = () => {
  return (
    <div className="App">
     <CartContextProvider>
      <NotificationProvider>
          <BrowserRouter>
            <NavBar />
            <Banner />
            <Sobre />
              <Routes>
                  <Route path='/' element={<ItemListContainer greeting="Todas Nuestras Espacialidades" />}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting="Platos filtrados por categoria" />}/>
                  <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                  <Route path='/about' element={<h1>About</h1>}/>
                  <Route path='/cart' element={<Cart />}/>
                  <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
              </Routes>
          </BrowserRouter>
        </NotificationProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
