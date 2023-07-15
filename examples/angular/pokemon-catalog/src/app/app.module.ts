import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonCatalogComponent } from "./components/pokemon-catalog/pokemon-catalog.component";
import { PokemonImageComponent } from "./components/pokemon-image/pokemon-image.component";
import { PokemonService } from "./services/pokemon.service";

@NgModule({
  declarations: [AppComponent, PokemonCatalogComponent, PokemonImageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
