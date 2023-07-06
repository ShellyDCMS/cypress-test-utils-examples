import { Component, EventEmitter, Output } from "@angular/core";
import { PokemonList, PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: "pokemon-catalog",
  templateUrl: "./pokemon-catalog.component.html",
  styleUrls: ["./pokemon-catalog.component.scss"]
})

//
export class PokemonCatalogComponent {
  pokemon: PokemonList = {
    count: 0,
    next: null,
    previous: null,
    results: []
  };
  @Output() onNext: EventEmitter<any> = new EventEmitter();
  @Output() onPrev: EventEmitter<any> = new EventEmitter();

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit() {
    this.getFirstPokemon();
  }

  private getFirstPokemon = async () => {
    this.pokemon = await this.pokemonService.getPokemonByOffset();
  };

  getPokemonName = () => this.pokemon?.results[0]?.name;

  nextDisabled = () => !(this.pokemon && this.pokemon.next);
  prevDisabled = () => !(this.pokemon && this.pokemon.previous);

  fetchNext = async () => {
    if (this.pokemon && this.pokemon.next) {
      this.pokemon = await this.pokemonService.getPokemon(this.pokemon.next);
    }
    this.onNext.emit();
  };

  fetchPrev = async () => {
    if (this.pokemon && this.pokemon.previous) {
      this.pokemon = await this.pokemonService.getPokemon(
        this.pokemon.previous
      );
    }
    this.onPrev.emit();
  };

  getPokemonIndex = (): number =>
    Number(
      this.pokemon?.results[0]?.url
        .split("/")
        .filter(element => element)
        .pop()
    );
  
  async selectPokemon(index: number) {
    this.pokemon = await this.pokemonService.getPokemonByOffset("" + index);
  }
}
