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
  getData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.libraryUrl);
  }



  movies: IMovie[];
  movieUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/search';

  searchMovies(search: string): Observable<IMovie[]> {
    search = search.trim();

    const options = search ?
    {params: new HttpParams().set('searchText', search)}:{};

    return this.http.get<IMovie[]>(this.movieUrl,options)
  }

}
