import { Component, Input } from "@angular/core";

@Component({
  selector: "pokemon-image",
  templateUrl: "./pokemon-image.component.html",
  styleUrls: ["./pokemon-image.component.scss"]
})

//
export class PokemonImageComponent {
  @Input() pokemonIndex: number = 1;
  showFallbackImage: boolean = false;

  onImageError(event: ErrorEvent) {
    this.showFallbackImage = true;
  }

  getPokemonImage = () => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.pokemonIndex}.gif`;
  };

  getFallbackImage = () => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonIndex}.png`;
  };
}
