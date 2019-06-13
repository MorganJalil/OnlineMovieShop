import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieLibraryComponent } from './components/movie-library/movie-library.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movie-library', component: MovieLibraryComponent},
  { path: 'movie-info/:id', component: MovieInfoComponent},
  { path: 'shoppingCart', component: ShoppingCartComponent},
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

