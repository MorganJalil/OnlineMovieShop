import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IDataService } from '../interfaces/IDataService';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor(private http: HttpClient) {}
  
  libraryUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
  getLibraryData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.libraryUrl);
  }


  
  movieUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchText=';

  getSearchMovie(searchMovie: string): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.movieUrl+ searchMovie);
  }

}
