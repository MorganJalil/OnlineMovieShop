import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IMovie } from 'src/app/interfaces/IMovie';
import { IShoppingCart } from 'src/app/interfaces/IShoppingCart';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  movies: IMovie[];
  totalSum: number;
  showShoppingCart = false;
  totalAmount: number;
  currentCart: IShoppingCart[] = [];
  show: boolean = false;
  shoppingCart: boolean = false;

  constructor(private service: DataService, private interaction: InteractionService) { }
  ngOnInit() {
    this.interaction.getCartFromSessionStorage();
    this.currentCart = this.interaction.getCart();
    this.cartTotalSum();
    this.cartTotalAmount();

    this.interaction.movieSource$.subscribe(
      cartInfo => {
        this.print(cartInfo);
      }
    )
  }
 
  cartDropDown(){
    this.showShoppingCart = !this.showShoppingCart;
  }

  search(searchMovie: string) {
    if (searchMovie) {
      
      this.service.getSearchMovies(searchMovie)
        .subscribe(movies => this.movies = movies);
        console.log(this.movies);
        this.show = true;
        return searchMovie;
    }
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {

    if (window.pageYOffset>50) {
      document.getElementById("mainHeader").style.opacity = '0.9';
    } else {
      document.getElementById("mainHeader").style.opacity = '1';
    }
  }

  redirectToDetails(id: number) {
    location.href = "/movie-info/" + id;
    console.log(id);
  }

  addMovieToCart(product: IMovie){
    this.interaction.sendCart(product);
    this.currentCart = this.interaction.cart;
    this.cartTotalAmount();
    this.cartTotalSum();
  }

  subtractMovieFromCart(id) {
    this.interaction.delete(id);
    this.cartTotalAmount();
    this.cartTotalSum();
  }

  print(cart) {
    this.currentCart = cart;
    this.cartTotalAmount();
    this.cartTotalSum();
  }

  cartTotalSum(){
    this.totalSum = 0;
    for(let i = 0; i < this.currentCart.length; i++){
      this.totalSum += this.currentCart[i].movie.price * this.currentCart[i].quantity;
    }
  }

  cartTotalAmount(){
    this.totalAmount = 0;
    for(let i = 0; i < this.currentCart.length; i++){
      this.totalAmount += this.currentCart[i].quantity;
    }
  }

  closeSearch() {
    this.show = false;
  }

  emptyCart() {
    this.interaction.clearCartLocalstorage();
  }

  goToShoppingCart() {
    location.href = '/shoppingCart';
    console.log('should go to cart');
    }
}
