import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDataService } from '../interfaces/IDataService';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor(private http: HttpClient) {}
  
  getData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }
}
