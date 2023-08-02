import { Component, Input } from "@angular/core";

@Component({
  selector: "pokemon-image",
  template: `<div *ngIf="pokemonIndex">
    <div>
      <img
        *ngIf="!showFallbackImage"
        class="pokemon"
        data-cy="pokemon-image"
        src="{{ getPokemonImage() }}"
        alt="pokemon"
        (error)="onImageError($event)"
      />
      <img
        *ngIf="showFallbackImage"
        class="pokemon-fallback"
        data-cy="pokemon-fallback-image"
        src="{{ getFallbackImage() }}"
        alt="pokemon"
      />
    </div>
  </div> `,
  styleUrls: ["./pokemon-image.component.scss"]
})
export class PokemonImageComponent {
  @Input() pokemonIndex: number = 1;
  showFallbackImage: boolean = false;

  onImageError(event: ErrorEvent) {
    this.showFallbackImage = true;
  }

  ngOnChanges() {
    this.showFallbackImage = false;
  }
  getPokemonImage = () => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.pokemonIndex}.gif`;
  };

  getFallbackImage = () => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonIndex}.png`;
  };
}
