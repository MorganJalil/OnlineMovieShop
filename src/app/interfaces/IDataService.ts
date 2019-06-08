import { Observable } from 'rxjs';
import { IMovie } from './IMovie';
import { IMovieCategory } from './IMovieCategory';


export interface IDataService {
    getMoviesData(): Observable<IMovie[]>;
    getMovieCategoryData(): Observable<IMovieCategory[]>;

}