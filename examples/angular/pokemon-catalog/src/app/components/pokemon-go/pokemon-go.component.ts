import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "pokemon-go",
    templateUrl: "./pokemon-go.component.html"
})
export class PokemonGoComponent {

    @Output()
    selectedPokemon: EventEmitter<number> = new EventEmitter<number>();

    public searchTerm: number | undefined = undefined;

    public onSumbit = () => {
        this.selectedPokemon.emit(this.searchTerm);
    }
}
