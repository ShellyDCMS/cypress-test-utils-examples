import "./App.scss";
import { PokemonCatalogComponent } from "./components/pokemon-catalog/pokemon-catalog.container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonCatalogComponent></PokemonCatalogComponent>
      </header>
      <span>Pokémon and Pokémon character names are trademarks of Nintendo.</span>
    </div>
  );
}

export default App;
