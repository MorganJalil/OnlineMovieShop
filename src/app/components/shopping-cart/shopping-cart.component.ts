import { Component, OnInit } from '@angular/core';
import { IOrderRow } from 'src/app/interfaces/IOrder';
import { IShoppingCart } from 'src/app/interfaces/IShoppingCart';
import { Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  orderRows: IOrderRow[] = [];
  currentCart: IShoppingCart[] = [];
  totalPrice: number;
  userInfo = this.fb.group({
    userName: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    paymentType: ['', Validators.required]
  });

  constructor(private route: ActivatedRoute, private service: DataService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.currentCart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    this.cartTotalSum();
  }

  cartTotalSum() {
    this.totalPrice = 0;
    for (let i = 0; i < this.currentCart.length; i++) {
      this.totalPrice += this.currentCart[i].totalSum;
    }
    return this.totalPrice;
  }

  createOrder() {
    this.createOrderRow;
    console.log(this.userInfo.value);
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

    console.log(orders);
    this.service.postOrder(orders).subscribe(
      response => {console.log(response); },
      err => {console.log(err.message); },
      () => {console.log('completed'); }
    );
    sessionStorage.clear();
    //this.goToConfirmation();
  }
  goToConfirmation() {
  location.href = '/confirmation';
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

  createOrderRow() { 
    for (let i = 0; i < this.currentCart.length; i++) {
      this.orderRows.push({ProductId: this.currentCart[i].movie.id, Amount: this.currentCart[i].quantity});
      this.cartTotalSum;
    }
  }
}

