import { Observable } from 'rxjs';
import { IMovie } from './IMovie';
import { IShoppingCart } from './IShoppingCart';
import { IOrder } from './IOrder';

export interface IDataService {
    getLibraryData(): Observable<IMovie[]>;
    getSessionCartItems();
    emptyShoppingCart();
    addToShoppingCart(items: IShoppingCart[]);
    showOrder(): Observable<IOrder[]>;
}