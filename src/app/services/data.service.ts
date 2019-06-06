import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { IDataService } from '../interfaces/IDataService';
import { IShoppingCart } from '../interfaces/IShoppingCart';
import { IOrder } from '../interfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  constructor(private http: HttpClient) {}

  shoppingCart: IShoppingCart[] = []
  libraryUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/products';
  movieUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchText=';
  orderUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders';
  companyOrderUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=27';
  
  
  getLibraryData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.libraryUrl);
  }

  getSearchMovie(searchMovie: string): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.movieUrl+ searchMovie);
  }

  addToShoppingCart (items: IShoppingCart[]) {
    return sessionStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
  }
  getSessionCartItems() {
    return this.shoppingCart = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];
  }

  createOrder(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(this.orderUrl, order);
  }

  showOrder(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.companyOrderUrl);
  }

  emptyShoppingCart(): void {
    sessionStorage.removeItem('shoppingCart');
    }


}
