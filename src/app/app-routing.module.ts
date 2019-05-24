import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieLibraryComponent } from './components/movie-library/movie-library.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'movie-library', component: MovieLibraryComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule 
  ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

