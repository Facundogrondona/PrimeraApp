
import './App.css';
import NavBar from './components/navBar/NavBar';
import Banner from './components/Banner/Banner';
import Sobre from './components/Sobre/Sobre';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetails from './components/ItemDetails/ItemDetails';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <NavBar /> 
        <Banner />
        <Sobre />
          <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/detail/:productoId' element={<ItemDetails />}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
