import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieLibraryComponent } from './components/movie-library/movie-library.component';


const routes: Routes = [
  { path: 'movie-library', component: MovieLibraryComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

