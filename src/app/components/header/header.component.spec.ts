import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MockDataService } from 'src/app/services/mock-data.service';
import { ActivatedRouteStub } from 'src/app/testing/activatedroutestub';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const activatedRouteStub = new ActivatedRouteStub({ id: 2 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: DataService, useClass: MockDataService}],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count totalprice in cart', () => {
    let service = new MockDataService();
   
    service.getMoviesData().subscribe((movies) => {
      expect(component.totalSum).toBe(0);
      component.addMovieToCart(movies[0]);
      component.addMovieToCart(movies[0]);
      component.addMovieToCart(movies[0]);
      component.cartTotalSum();
      expect(component.totalSum).toBe(597);
      component.emptyCart();
    });
  });

  it('should remove one movie from cart', () => {
    let service = new MockDataService();
   
    service.getMoviesData().subscribe((movies) => {
      expect(component.totalAmount).toBe(0);
      component.addMovieToCart(movies[0]);
      component.addMovieToCart(movies[0]);
      component.addMovieToCart(movies[0]);
      component.cartTotalAmount();
      expect(component.totalAmount).toBe(3);
      component.subtractMovieFromCart(76);
      component.cartTotalAmount();
      expect(component.totalAmount).toBe(2);
      component.emptyCart();
    });
  });

  it('should calculate totalOrderAmount', () => {
    let service = new MockDataService();
    
    service.getMoviesData().subscribe((movies) => {
        component.addMovieToCart(movies[0]);
        component.addMovieToCart(movies[0]);
        component.addMovieToCart(movies[0]);
        component.cartTotalAmount();
        expect(component.totalAmount).toBe(3);
        component.emptyCart();
    });
  });

  it('should empty cart', () => {
    let service = new MockDataService();
    
    service.getMoviesData().subscribe((movies) => {
        component.addMovieToCart(movies[0]);
        component.addMovieToCart(movies[0]);
        component.addMovieToCart(movies[0]);
        component.cartTotalAmount();
        expect(component.totalAmount).toBe(3);
        component.emptyCart();
    });
  });



});
