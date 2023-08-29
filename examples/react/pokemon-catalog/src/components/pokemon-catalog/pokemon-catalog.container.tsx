import { IPokemonService, PokemonService, PokemonServiceContext } from "@services/pokemon.service";
import { IPokemonCatalogComponentsProps, PokemonCatalogComponent } from "./pokemon-catalog.component";

export interface IPokemonCatalogPros extends IPokemonCatalogComponentsProps {
  service?: IPokemonService;
}

export const PokemonCatalog = ({ onNext, onPrev, service }: IPokemonCatalogPros) => {
  const pokemonService = service || new PokemonService();

  return (
    <PokemonServiceContext.Provider value={pokemonService}>
      <PokemonCatalogComponent onNext={onNext} onPrev={onPrev}></PokemonCatalogComponent>
    </PokemonServiceContext.Provider>
  );
};
