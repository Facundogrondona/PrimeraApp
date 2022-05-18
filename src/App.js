import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar /> 
      
      <header className="App-header">
      <h2>La oferta de la semana</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ItemListContainer greeting="Hola Coders"/>
    </div>
  );
}

export default App;
