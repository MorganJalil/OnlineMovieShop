import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IMovie } from 'src/app/interfaces/IMovie';
import { IShoppingCart } from 'src/app/interfaces/IShoppingCart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: DataService) { }
  
  show: boolean = false;
  movies: IMovie[];
  movie: IMovie = { id: 0, name: '', price: 0, description: '', imageUrl: '', year: 0, added: '', productCategory:[]};
  items: IShoppingCart[] = [];

  ngOnInit() {
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
      document.getElementById("mainHeader").style.opacity = '0.8';
    } else {
      document.getElementById("mainHeader").style.opacity = '1';
    }
/*     let number = window.pageYOffset || 0;
    console.log(number); */
  }

  closeSearch() {
    this.show = false;
  }

}
