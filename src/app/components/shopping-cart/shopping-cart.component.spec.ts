import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ActivatedRouteStub } from 'src/app/testing/activatedroutestub';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MockDataService } from 'src/app/services/mock-data.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  let stub = new ActivatedRouteStub ({ id: 76 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ],
      imports: [ HttpClientModule, RouterTestingModule, ReactiveFormsModule],
      providers: [ { provide: ActivatedRoute, useValue: stub }]
    })
    .overrideComponent(ShoppingCartComponent, {
      set: {
        providers: [
          { provide: DataService, useClass: MockDataService }
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete products from cart', () => {
    const service = new MockDataService();

    service.getMoviesData().subscribe((movies) => {
      component.addMovieToCart(movies[0]);
      expect(component.currentCart.length).toEqual(1);
      component.addMovieToCart(movies[1]);
      expect(component.currentCart.length).toEqual(2);
      component.emptyCart();
      expect(component.currentCart.length).toEqual(0);
      component.emptyCart();
    });  
  });

  it('should count totalprice in cart', () => {
    const service = new MockDataService();

    service.getMoviesData().subscribe((movies) => {

      expect(component.totalPrice).toBe(0);
        component.addMovieToCart(movies[0]);
        component.addMovieToCart(movies[0]);
        component.addMovieToCart(movies[0]);
        component.cartTotalSum();
        expect(component.totalPrice).toBe(597);
        component.emptyCart();
    });
  });

  it('should add one movie to cart', () => {
    const service = new MockDataService();

    service.getMoviesData().subscribe((movies) => {
      component.addMovieToCart(movies[0]);
      expect(component.currentCart.length).toEqual(1);
      component.emptyCart();
    });
  });

  it('should remove one movie from cart', () => {
    let service = new MockDataService();
   
    service.getMoviesData().subscribe((movies) => {
      component.addMovieToCart(movies[0]);
      component.addMovieToCart(movies[0]);
      
      component.cartTotalAmount();
      expect(component.totalAmount).toBe(2);
      component.subtractMovieFromCart(76);
      component.cartTotalAmount();
      expect(component.totalAmount).toBe(1);
      component.emptyCart();
    });
  });
  
});