import { Component, EventEmitter, Input, Output } from "@angular/core";

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
  selector: "pokemon-catalog-component",
  templateUrl: "./pokemon-catalog.component.html",
  styleUrls: ["./pokemon-catalog.component.scss"]
})

//
export class PokemonCatalogComponent {
  @Input() pokemon: PokemonList = {
    count: 0,
    next: null,
    previous: null,
    results: []
  };
  @Output() onNext: EventEmitter<any> = new EventEmitter();
  @Output() onPrev: EventEmitter<any> = new EventEmitter();

  getPokemonName = () => this.pokemon?.results[0]?.name;

  nextDisabled = () => !(this.pokemon && this.pokemon.next);
  prevDisabled = () => !(this.pokemon && this.pokemon.previous);
  getPokemonIndex = (): number =>
    Number(
      this.pokemon?.results[0]?.url
        .split("/")
        .filter(element => element)
        .pop()
    );
}
