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

  constructor(private route: ActivatedRoute, private service: DataService) { }

  movie: IMovie = { id: 0, name: '', price: 0, description: '', imageUrl: '', year: 0, added: ''};
  items: IShoppingCart[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(myParams => {
      const id: number = +myParams.get('id');
      this.getMovieById(id);
    })
  }

  addToShoppingCart(quantity: number) {
    const totalSum = 0;
    const newMovie: IShoppingCart = {movie: this.movie, quantity, totalSum};
    this.items = this.service.getSessionCartItems();
    let addMovie = false;

    for (let i = 0; i < this.items.length; i++) {
      if (newMovie.movie.id === this.items[i].movie.id) {
        this.items[i].quantity += newMovie.quantity;
        this.items[i].totalSum = this.items[i].movie.price * this.items[i].quantity;
        this.service.addToShoppingCart(this.items);
        addMovie = true;
      }
    }

    if (!addMovie) {
      this.items.push({movie: newMovie.movie, quantity: newMovie.quantity,
        totalSum: newMovie.movie.price * newMovie.quantity});
      this.service.addToShoppingCart(this.items);
    }
  }

  getMovieById(id: number) {

    if (id > 0) {
      this.service.getLibraryData().subscribe((movies) => {
        for (let i = 0; i < movies.length; i++) {
          if (movies[i].id === id) {
            this.movie = movies[i];
          }
        }
      });
    }
  }
}
