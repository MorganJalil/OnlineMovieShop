import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IMovie {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;

  products: IMovie[] = 
  [
    { id: 1, name: 'Callaway Driver', price: 2500, imageUrl: '' , description: 'An awesome driver'},
      { id: 2, name: 'Callaway Spoon', price: 1500, imageUrl: '', description: 'An awesome driver'},
      { id: 3, name: 'Callaway Wedge', price: 3500, imageUrl: '', description: 'An awesome driver'},
      { id: 4, name: 'Callaway Putter', price: 4500, imageUrl: '', description: 'An awesome driver'}];
  
  getData(): Observable<IMovie[]> {
    return of(this.products);
  }
  
      constructor() { }
}

/* id: number;
name: string;
price: number;
imageUrl: string;
description: string; */