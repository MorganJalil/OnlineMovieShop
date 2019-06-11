import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IMovie } from 'src/app/interfaces/IMovie';
import { IShoppingCart } from 'src/app/interfaces/IShoppingCart';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  totalQuantity: number;
  
  
  constructor(private route: ActivatedRoute, private service: DataService) { }

  movie: IMovie = { id: 0, name: '', price: 0, description: '', imageUrl: '', year: 0, added: '', productCategory: []};
  items: IShoppingCart[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(myParams => {
      const id: number = +myParams.get('id');
      this.getMovieById(id);
    })
}

  getMovieById(id: number) {

    if (id > 0) {
      this.service.getMoviesData().subscribe((movies) => {
        for (let i = 0; i < movies.length; i++) {
          if (movies[i].id === id) {
            this.movie = movies[i];
          }
        }
      });
    }
  }

  addToShoppingCart (quantity: number) {
    const totalSum = 0;
    const newItem: IShoppingCart = {movie: this.movie, quantity, totalSum};
    this.items = this.service.getShoppingCartMovies();
    let foundMovie = false;

    for (let index = 0; index < this.items.length; index++) {
      if (newItem.movie.id == this.items[index].movie.id) {
        this.items[index].quantity += newItem.quantity;
        this.items[index].totalSum = this.items[index].movie.price * this.items[index].quantity;
        this.service.addToShoppingCart(this.items);
        foundMovie = true;
      }
    }

    if (!foundMovie) {
      this.items.push({ movie: newItem.movie, quantity: newItem.quantity, totalSum: newItem.movie.price * newItem.quantity});
      this.service.addToShoppingCart(this.items);
    }



    
    var items = JSON.parse(sessionStorage.getItem('shoppingCart'));
    
    for (var i=0; i < sessionStorage.length;  i++) {
      console.log((items)[i].quantity);
      
  
      }
    }
    
    
    if (items) {
      
      //console.log(valueFromSession);
      //console.log(test1);
      //console.log(JSON.parse(items)[0].quantity);
      //console.log(JSON.parse(items)[1].totalSum);
      //this.items = JSON.parse(items);
    }
  

  getTotal(){
    this.totalQuantity = 1;
      for( let i = 0; i < this.items.length; i++){
        this.totalQuantity += this.items[i].quantity;
        
    }
    console.log(this.totalQuantity);
  }
  
    removeMovies(): void {
    sessionStorage.removeItem('shoppingCart');
    }

    goToShoppingCart() {
      location.href = '/shoppingCart';
      console.log('should go to cart');
      }
}
