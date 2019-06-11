import { Observable } from 'rxjs';
import { IMovie } from './IMovie';
import { IMovieCategory } from './IMovieCategory';
import { IShoppingCart } from './IShoppingCart';
import { IOrder } from './IOrder';


export interface IDataService {
    getMoviesData(): Observable<IMovie[]>;
    getMovieCategoryData(): Observable<IMovieCategory[]>;
    addToShoppingCart(movie: IShoppingCart[]);
    getShoppingCartMovies();
    showOrder(): Observable<IOrder[]>;
    removeMovies();
}