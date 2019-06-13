import { Component, OnInit } from '@angular/core';
import { IOrderRow } from 'src/app/interfaces/IOrder';
import { IShoppingCart } from 'src/app/interfaces/IShoppingCart';
import { Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { IMovie } from 'src/app/interfaces/IMovie';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  orderRows: IOrderRow[] = [];
  currentCart: IShoppingCart[] = [];
  totalPrice: number;
  totalAmount: number;
  showShoppingCart = false;
  
  userInfo = this.fb.group({
    userName: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    paymentType: ['', Validators.required]
  });

  constructor(private interaction: InteractionService,private route: ActivatedRoute, private service: DataService,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.interaction.getCartFromSessionStorage();
    this.currentCart = this.interaction.getCart();
    this.cartTotalSum();

    this.interaction.movieSource$.subscribe(
      cartInfo => {
        this.print(cartInfo);
      }
    )
  }
 
  print(currentCart) {
    this.currentCart = this.currentCart;
    this.cartTotalSum()
  }

  cartTotalSum() {
    this.totalPrice = 0;
    for (let i = 0; i < this.currentCart.length; i++) {
      this.totalPrice += this.currentCart[i].totalSum;
    }
    return this.totalPrice;
  }

  cartTotalAmount(){
    this.totalAmount = 0;
    for(let i = 0; i < this.currentCart.length; i++){
      this.totalAmount += this.currentCart[i].quantity;
    }
  }

  addMovieToCart(singleMovie: IMovie) {

    this.interaction.sendCart(singleMovie);
    this.currentCart = this.interaction.cart;
    this.cartTotalSum();
  }

  cartDropDown() {
    this.showShoppingCart = !this.showShoppingCart;
  }

  subtractMovieFromCart(id) {
    this.interaction.delete(id);
    this.cartTotalSum();
  }


  createOrder() {
    this.createOrderRow;
    //console.log(this.userInfo.value);
    const orders = {
      id: 0,
      companyId: 27,
      created: moment().format('LLLL'),
      createdBy: this.userInfo.value.userEmail,
      paymentMethod: this.userInfo.value.paymentType,
      totalPrice: this.cartTotalSum(),
      status: 0,
      orderRows: this.orderRows
    };

    //console.log(orders);
    this.service.postOrder(orders).subscribe(
      response => {console.log(response); },
      err => {console.log(err.message); },
      () => {console.log('completed'); }
    );
    sessionStorage.clear();
    this.goToConfirmation();
  }
  
  goToConfirmation() {
  location.href = '/confirmed';
  }
  

  deleteFromCart(id: number) {
    for (let i = 0; i < this.currentCart.length; i++) {
      if (this.currentCart[i].movie.id === id) {
        this.currentCart.splice(i, 1);
      }
      sessionStorage.setItem('shoppingCart', JSON.stringify(this.currentCart));
      this.cartTotalSum();
    }
  }

  emptyCart() {
    this.interaction.clearCartLocalstorage();
  }

  createOrderRow() { 
    for (let i = 0; i < this.currentCart.length; i++) {
      this.orderRows.push({productId: this.currentCart[i].movie.id, Amount: this.currentCart[i].quantity});
      this.cartTotalSum;
    }
  }
}

