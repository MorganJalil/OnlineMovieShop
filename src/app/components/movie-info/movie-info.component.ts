import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IMovie } from 'src/app/interfaces/IMovie';
import { IShoppingCart } from 'src/app/interfaces/IShoppingCart';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input() product: IMovie;
  movie: IMovie = { id: 0, name: '', price: 0, description: '', imageUrl: '', year: 0, added: '', productCategory: []};
  items: IShoppingCart[] = [];
  
  constructor(private interaction: InteractionService, private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(myParams => {
      const id: number = +myParams.get('id');
      this.getMovieById(id);
    })
}

addMovieToCart(product){
  this.interaction.sendCart(product);
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

/*  removeMovies(): void {
      sessionStorage.removeItem('shoppingCart');
    } */

    goToShoppingCart() {
      location.href = '/shoppingCart';
      console.log('should go to cart');
      }
}
