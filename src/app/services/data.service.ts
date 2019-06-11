import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { IDataService } from '../interfaces/IDataService';
import { IShoppingCart } from '../interfaces/IShoppingCart';
import { IOrder } from '../interfaces/IOrder';
import { IMovieCategory } from '../interfaces/IMovieCategory';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {
  currentMovie: any;

  constructor(private http: HttpClient) {}

  shoppingCart: IShoppingCart[] = []
  MoviesUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
  searchMovieUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchText=';
  createOrderUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders';
  showOrderUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=27';
  movieCategoryUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/categories';
  
  getMoviesData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.MoviesUrl);
  }

  getSearchMovies(searchMovie: string): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.searchMovieUrl+ searchMovie);
  }
  getSingleMovieData(id): Observable<IMovie> {
    return this.http.get<IMovie>(this.MoviesUrl + id);
  }

  getMovieCategoryData(): Observable<IMovieCategory[]> {
    return this.http.get<IMovieCategory[]>(this.movieCategoryUrl);
  }

  createOrder(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(this.createOrderUrl, order);
  }

  showOrder(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.showOrderUrl);
  }

  addToShoppingCart(movie: IShoppingCart[]) {
    return sessionStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
  }
  getShoppingCartMovies() {
    return this.shoppingCart = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];
  }

  removeMovies(): void {
    sessionStorage.removeItem('shoppingCart');
    }
}
