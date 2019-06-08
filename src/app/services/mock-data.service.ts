import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Observable, of } from 'rxjs';
import { IDataService } from '../interfaces/IDataService';
import { IShoppingCart } from '../interfaces/IShoppingCart';
import { IOrder } from '../interfaces/IOrder';
import { IMovieCategory } from '../interfaces/IMovieCategory';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {

 
  
  movies: IMovie[] = [
    {id: 76,
    name: 'The Dark Knight',
  // tslint:disable-next-line: max-line-length
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
    price: 199,
  // tslint:disable-next-line: max-line-length
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    year: 2008,
    added: '2016-01-05T00:00:00',
    productCategory :[{"categoryId":7,"category":null}],
    },

    {id: 77,
    name: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanit"s survival.',
    price: 129,
  // tslint:disable-next-line: max-line-length
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg',
    year: 2014,
    added: '2017-07-16T00:00:00',
    productCategory :[{"categoryId":7,"category":null}],
    },

    {id: 78,
    name: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanit"s survival.',
    price: 129,
  // tslint:disable-next-line: max-line-length
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg',
    year: 2014,
    added: '2017-07-16T00:00:00',
    productCategory :[{"categoryId":7,"category":null}],
    },

    {id: 79,
    name: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanit"s survival.',
    price: 129,
  // tslint:disable-next-line: max-line-length
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg',
    year: 2014,
    added: '2017-07-16T00:00:00',
    productCategory :[{"categoryId":7,"category":null}],
    }];

    movie: IMovie =
    { name: 'Man-Bat ',
      description: 'Thriller',
      year: 1993,
      price: 10,
      added: '6',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg',
      id: 1,
      productCategory :[{"categoryId":7,"category":null},
    ]};

    categories: IMovieCategory[] = [
      { name: 'Action', id: 1},
      { name: 'Thriller', id: 2},
      { name: 'Comedy', id: 3},
      { name: 'Sci-fi', id: 4},
    ];

  
  getMoviesData(): Observable<IMovie[]> {
    return of(this.movies);
  }

  getSingleMovieData(id): Observable<IMovie> {
    return of (this.movie);
  }

  getMovieCategoryData(): Observable<IMovieCategory[]> {
    return of(this.categories);
  }
  
      constructor() { }
}

/* id: number;
name: string;
price: number;
imageUrl: string;
description: string; */