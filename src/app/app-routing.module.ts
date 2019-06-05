import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieLibraryComponent } from './components/movie-library/movie-library.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movie-library', component: MovieLibraryComponent},
  { path: 'movie-info/:id', component: MovieInfoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

