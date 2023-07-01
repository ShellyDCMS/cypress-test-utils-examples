import { Component, EventEmitter, Output } from "@angular/core";
import { PokemonService } from "src/app/services/pokemon.service";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
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


  constructor(private readonly pokemonService: PokemonService) { }
  
  ngOnInit() {
    this.getFirstPokemon();
  }

  private getFirstPokemon = async () => {
    this.pokemon = await this.pokemonService.getPokemon();
  };

  getPokemonName = () => this.pokemon?.results[0]?.name;

  nextDisabled = () => !(this.pokemon && this.pokemon.next);
  prevDisabled = () => !(this.pokemon && this.pokemon.previous);

  fetchNext = async () => {
    debugger;

    if (this.pokemon && this.pokemon.next) {
      console.log('+++++++++++++++++++++'+ this.pokemon.next)
       this.pokemon = await this.pokemonService.getPokemon(this.pokemon.next);
    }
    debugger;
    this.onNext.emit()
  };

  fetchPrev = async () => {
    if (this.pokemon && this.pokemon.previous) {
      this.pokemon = await this.pokemonService.getPokemon(this.pokemon.previous)
    }
    this.onPrev.emit()
  };
  
  getPokemonIndex = (): number =>
    Number(
      this.pokemon?.results[0]?.url
        .split("/")
        .filter(element => element)
        .pop()
    );
}
