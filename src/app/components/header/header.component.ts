import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IMovie } from 'src/app/interfaces/IMovie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  show: boolean = false;
  constructor(private service: DataService) { }
  movies: IMovie[];

  ngOnInit() {
  }

  search(searchMovie: string) {
    if (searchMovie) {
      
      this.service.getSearchMovie(searchMovie)
        .subscribe(movies => this.movies = movies);
        console.log(this.movies);
        this.show = true;
        return searchMovie;
    }
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {

    if (window.pageYOffset>50) {
      document.getElementById("kebab").style.opacity = '0.8';
    } else {
      document.getElementById("kebab").style.opacity = '1';
    }
/*     let number = window.pageYOffset || 0;
    console.log(number); */
  }

  closeSearch() {
    this.show = false;
  }

}
