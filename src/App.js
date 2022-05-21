
import './App.css';
import NavBar from './components/navBar/NavBar';
import Banner from './components/Banner/Banner';
import Sobre from './components/Sobre/Sobre';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Banner />
      <Sobre />
      <ItemListContainer />
    </div>
  );
}

export default App;
