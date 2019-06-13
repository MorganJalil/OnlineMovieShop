import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieLibraryComponent } from './components/movie-library/movie-library.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent} from './components/header/header.component';
import { FooterComponent} from './components/footer/footer.component';
import { HomeComponent} from './components/home/home.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConfirmedComponent } from './components/confirmed/confirmed.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieLibraryComponent,
    MovieInfoComponent,
    ShoppingCartComponent,
    NotFoundComponent,
    ConfirmedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
