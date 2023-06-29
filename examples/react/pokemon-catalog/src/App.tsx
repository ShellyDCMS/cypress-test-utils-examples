import "./App.scss";
import { PokemonCatalog } from "./components/pokemon-catalog/pokemon-catalog.container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonCatalog></PokemonCatalog>
      </header>
    </div>
  );
}

export default App;
