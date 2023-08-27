import { Component, EventEmitter, Output } from "@angular/core";
import { PokemonList, PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: "pokemon-catalog",
  template: `<div class="catalog">
    <pokemon-image [pokemonIndex]="getPokemonIndex()"></pokemon-image>
    <h1 *ngIf="pokemon" data-cy="pokemon-name">{{ getPokemonName() }}</h1>

    <p data-cy="count" *ngIf="pokemon">{{ getPokemonIndex() }} of {{ pokemon.count }}</p>
    <div>
      <button data-cy="prev" (click)="fetchPrev()" [disabled]="prevDisabled()">Prev</button>
      <button data-cy="next" (click)="fetchNext()" [disabled]="nextDisabled()">Next</button>
    </div>
    <div>
      <br />
    </div>
  </div> `,
  styleUrls: ["./pokemon-catalog.component.scss"]
})

//
export class PokemonCatalog {
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
      this.pokemon = await this.pokemonService.getPokemon(this.pokemon.previous);
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

  fetchPokemonByOffset = async (index: string) => {
    const pokemon = await this.pokemonService.getPokemonByOffset(`${Number(index) - 1}`);
    if (pokemon?.results.length) {
      this.pokemon = pokemon;
    } else {
      alert(`pokemon ${index} not found`);
    }
  };
}
