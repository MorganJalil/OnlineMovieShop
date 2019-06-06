import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Observable, of } from 'rxjs';
import { IDataService } from '../interfaces/IDataService';
import { IShoppingCart } from '../interfaces/IShoppingCart';
import { IOrder } from '../interfaces/IOrder';

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
    },

    {id: 77,
    name: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanit"s survival.',
    price: 129,
  // tslint:disable-next-line: max-line-length
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg',
    year: 2014,
    added: '2017-07-16T00:00:00',
    },

    {id: 77,
    name: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanit"s survival.',
    price: 129,
  // tslint:disable-next-line: max-line-length
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg',
    year: 2014,
    added: '2017-07-16T00:00:00',
    },

    {id: 77,
    name: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanit"s survival.',
    price: 129,
  // tslint:disable-next-line: max-line-length
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg',
    year: 2014,
    added: '2017-07-16T00:00:00',
    }
    ];
;
  
  getLibraryData(): Observable<IMovie[]> {
    return of(this.movies);
  }

  shoppingCart: IShoppingCart[] = [
    {movie: {id: 76,
      name: 'The Dark Knight',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice',
      price: 199,

      imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
      year: 2008,
      added: '2016-01-05T00:00:00',
    },
    quantity: 2,
    totalSum: 298}
  ];

  order: IOrder[] = [
    {id: 0,
    companyId: 4,
    created: '2019-06-02T14:39:00',
    createdBy: 'mjuu',
    paymentMethod: 'credit card',
    totalPrice: 298,
    status: 0,
    orderRows: [{ProductId: 76, Amount: 2}]
    }
  ];
  


  addToShoppingCart(items: IShoppingCart[]) {
    return this.shoppingCart;
  }

  getSessionCartItems() {

  }

 emptyShoppingCart() {

 }

 showOrder(): Observable<IOrder[]> {
  return of(this.order);
 }
  
      constructor() { }
}

/* id: number;
name: string;
price: number;
imageUrl: string;
description: string; */