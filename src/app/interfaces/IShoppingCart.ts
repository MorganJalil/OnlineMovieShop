import { IMovie } from './IMovie';

export interface IShoppingCart {
    movie: IMovie;
    quantity: number;
    totalSum: number;
}