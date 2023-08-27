import "./App.scss";
import { PokemonCatalog } from "./components/pokemon-catalog/pokemon-catalog.container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonCatalog></PokemonCatalog>
      </header>
      <span>Pokémon and Pokémon character names are trademarks of Nintendo.</span>
    </div>
  );
}

export default App;
