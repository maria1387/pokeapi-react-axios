import "./assets/css/App.css";
import Search from "./components/Search";
import pokemon from './assets/img/pokemon-logo.jpg'
const App = () => {
  return (
    <div className="app">
     <img src={pokemon} />
     <h1>PokeGuia</h1>
      <Search />
    </div>
  );
};

export default App;
