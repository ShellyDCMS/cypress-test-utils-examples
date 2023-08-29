import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "pokemon-go",
  template: `<form>
    <input data-hook="pokemon-index" [(ngModel)]="pokemonIndex" (keypress)="numericOnly($event)" name="pokemon-index" />
    <button
      type="submit"
      data-hook="go"
      (click)="onSubmit()"
      (keydown.enter)="onSubmit()"
      [disabled]="pokemonIndex === ''"
    >
      Go
    </button>
  </form>`
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
    if (event.key === "Enter") return true;
    let digitsRegex = /^([0-9])$/;
    let result = digitsRegex.test(event.key);
    return result;
  };
}
