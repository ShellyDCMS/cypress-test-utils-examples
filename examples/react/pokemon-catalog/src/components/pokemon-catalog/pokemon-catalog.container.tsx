import { IPokemonService, PokemonService, PokemonServiceContext } from "../../services/pokemon.service";
import { IPokemonCatalogComponentsProps, PokemonCatalog } from "./pokemon-catalog.component";

export interface IPokemonCatalogPros extends IPokemonCatalogComponentsProps {
  service?: IPokemonService;
}

export const PokemonCatalog = ({ onNext, onPrev, service }: IPokemonCatalogPros) => {
  const pokemonService = service || new PokemonService();

  return (
    <PokemonServiceContext.Provider value={pokemonService}>
      <PokemonCatalog onNext={onNext} onPrev={onPrev}></PokemonCatalog>
    </PokemonServiceContext.Provider>
  );
};
