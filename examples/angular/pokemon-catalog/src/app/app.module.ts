import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonCatalogComponent } from "./components/pokemon-catalog/pokemon-catalog.component";
import { PokemonImageComponent } from "./components/pokemon-image/pokemon-image.component";
import { PokemonService } from "./services/pokemon.service";
import { PokemonGoComponent } from "./components/pokemon-go/pokemon-go.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PokemonCatalogComponent,
    PokemonImageComponent,
    PokemonGoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
