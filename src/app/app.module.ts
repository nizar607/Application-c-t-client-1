import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFournisseurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
