import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieLibraryComponent } from './components/movie-library/movie-library.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieLibraryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
