import { Injectable } from '@angular/core';
import { IShoppingCart } from '../interfaces/IShoppingCart';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private movieSource = new Subject<IShoppingCart[]>();

  cart: IShoppingCart[] = [];
  movieSource$ = this.movieSource.asObservable();

  constructor() { }

  sendCart(product: IMovie) {
    console.log("in service");
    let addedMovie = false;

    for (let i = 0; i < this.cart.length; i++) {
      if (product.id === this.cart[i].movie.id) {
        this.cart[i].quantity++;
        addedMovie = true;
        this.cart[i].totalSum += this.cart[i].movie.price;
      }
    }
 
    if (addedMovie === false) {
      this.cart.push({ movie: product, quantity: 1, totalSum: product.price});
    }
    this.movieSource.next(this.cart);
    this.saveCartToLocalStorage();
  }
  
  delete(id: number){
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].movie.id === id){
        if(this.cart[i].quantity > 0){
          this.cart[i].quantity--;
          this.cart[i].totalSum -= this.cart[i].movie.price;
        }
  
        if(this.cart[i].quantity === 0){
          this.cart.splice(i, 1);
        }
      }
    }
    this.movieSource.next(this.cart);
    this.saveCartToLocalStorage();
  }

  saveCartToLocalStorage(){
    sessionStorage.setItem('shoppingCart', JSON.stringify(this.cart));
  }

  getCartFromLocalStorage(){
    let fetchLocalStorageCart = sessionStorage.getItem('shoppingCart');
    if(fetchLocalStorageCart === null){
      this.cart = [];
    } else{
      this.cart = JSON.parse(fetchLocalStorageCart);
    }
    this.getCart() 
  }
  getCart() {
    return this.cart;
  }
  clearCartLocalstorage(){
    this.cart.splice(0, this.cart.length);
 
    this.movieSource.next(this.cart);
 
    this.saveCartToLocalStorage();
 
  }
}
