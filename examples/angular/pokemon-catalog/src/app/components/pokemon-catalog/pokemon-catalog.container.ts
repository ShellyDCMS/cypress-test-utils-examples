import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { PokemonList } from "./pokemon-catalog.component";

@Component({
  selector: "pokemon-catalog",
  templateUrl: "./pokemon-catalog.container.html"
})
export class PokemonCatalog {
  pokemon: PokemonList = { count: 0, next: null, previous: null, results: [] };
  pokemon$ = new Subject<PokemonList>();

  ngOnInit() {
    this.getFirstPokemon();
  }
  getPokemonName = () => this.pokemon?.results[0].name;

  fetchNext = async () => {
    if (this.pokemon && this.pokemon.next) {
      this.pokemon = await (await fetch(this.pokemon.next)).json();
      this.pokemon$.next(this.pokemon);
    }
  };

  fetchPrev = async () => {
    if (this.pokemon && this.pokemon.previous) {
      this.pokemon = await (await fetch(this.pokemon.previous)).json();
      this.pokemon$.next(this.pokemon);
    }
  };

  nextDisabled = () => !(this.pokemon && this.pokemon.next);
  prevDisabled = () => !(this.pokemon && this.pokemon.previous);
  getPokemonIndex = () =>
    this.pokemon?.results[0].url
      .split("/")
      .filter(element => element)
      .pop();

  private getFirstPokemon = async () => {
    this.pokemon = await (
      await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1")
    ).json();
    this.pokemon$.next(this.pokemon);
  };
}
