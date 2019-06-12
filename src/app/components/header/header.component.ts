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
  constructor(private service: DataService, private interactionService: InteractionService) { }
  ngOnInit() {}


  show: boolean = false;
  
  shoppingCart: boolean = false;
  numberOfSearchResults: number;
 
  toggleCart() {
    document.getElementById("cart").classList.add("showCart");
    document.getElementById("cart").classList.add("hideCart"),1000;
    this.shoppingCart = true;
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
/*     let number = window.pageYOffset || 0;
    console.log(number); */
  }

  redirectToDetails(id: number) {
    location.href = "/movie-info/" + id;
    console.log(id);
  }

  addMovieToCart(product){
    this.interactionService.sendCart(product);
  }

  closeSearch() {
    this.show = false;
  }
}
