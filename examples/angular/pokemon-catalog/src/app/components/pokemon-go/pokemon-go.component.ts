import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "pokemon-go",
  template: `<div>
    <input
      data-cy="pokemon-index"
      [(ngModel)]="pokemonIndex"
      (keypress)="numericOnly($event)"
    />
    <button type="submit" type="submit" data-cy="go" (click)="onSubmit()">
      Go
    </button>
  </div>`
})
export class PokemonGoComponent {
  @Output()
  selectedPokemon: EventEmitter<string> = new EventEmitter<string>();

  public pokemonIndex: string = "";

  public onSubmit = () => {
    this.selectedPokemon.emit(this.pokemonIndex);
    this.pokemonIndex = "";
  };

  numericOnly = (event: KeyboardEvent): boolean => {
    let digitsRegex = /^([0-9])$/;
    let result = digitsRegex.test(event.key);
    return result;
  };
}
