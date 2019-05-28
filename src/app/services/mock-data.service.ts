import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Observable, of } from 'rxjs';
import { IDataService } from '../interfaces/IDataService';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {

  movies: IMovie[] = 
  [
    { id: 1, name: 'Callaway Driver', price: 2500, imageUrl: '' , description: 'An awesome driver', year: 1990},
    { id: 2, name: 'Callaway Spoon', price: 1500, imageUrl: '', description: 'An awesome driver',year: 1990},
    { id: 3, name: 'Callaway Wedge', price: 3500, imageUrl: '', description: 'An awesome driver',year: 1990},
    { id: 4, name: 'Callaway Putter', price: 4500, imageUrl: '', description: 'An awesome driver',year: 1990}
  ];
  
  getData(): Observable<IMovie[]> {
    return of(this.movies);
  }
  
      constructor() { }
}

/* id: number;
name: string;
price: number;
imageUrl: string;
description: string; */