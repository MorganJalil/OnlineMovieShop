import { Injectable } from '@angular/core';
import { IShoppingCart } from '../interfaces/IShoppingCart';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private movieSource = new Subject<IShoppingCart[]>();

  shoppingCart: IShoppingCart[] = [];
  movieSource$ = this.movieSource.asObservable();

  constructor() { }

  sendCart(product: IMovie) {
    console.log("in service");
    let addedMovie = false;

    for (let i = 0; i < this.shoppingCart.length; i++) {
      if (product.id === this.shoppingCart[i].movie.id) {
        this.shoppingCart[i].quantity++;
        addedMovie = true;
        this.shoppingCart[i].totalSum += this.shoppingCart[i].movie.price;
      }
    }
 
    if (addedMovie === false) {
      this.shoppingCart.push({ movie: product, quantity: 1, totalSum: product.price});
    }
    this.movieSource.next(this.shoppingCart);
    this.saveCartToSessionStorage();
  }
  
  delete(id: number){
    for(let i = 0; i < this.shoppingCart.length; i++){
      if(this.shoppingCart[i].movie.id === id){
        if(this.shoppingCart[i].quantity > 0){
          this.shoppingCart[i].quantity--;
          this.shoppingCart[i].totalSum -= this.shoppingCart[i].movie.price;
        }
  
        if(this.shoppingCart[i].quantity === 0){
          this.shoppingCart.splice(i, 1);
        }
      }
    }
    this.movieSource.next(this.shoppingCart);
    this.saveCartToSessionStorage();
  }

  saveCartToSessionStorage(){
    sessionStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
  }

  getCartFromSessionStorage(){
    let fetchLocalStorageCart = sessionStorage.getItem('shoppingCart');
    if(fetchLocalStorageCart === null){
      this.shoppingCart = [];
    } else{
      this.shoppingCart = JSON.parse(fetchLocalStorageCart);
    }
    this.getShoppingCart() 
  }
  
  getShoppingCart() {
    return this.shoppingCart;
  }

  clearCartSessionstorage(){
    this.shoppingCart.splice(0, this.shoppingCart.length);
    this.movieSource.next(this.shoppingCart);
    this.saveCartToSessionStorage();
 
  }
}
