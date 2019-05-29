import { Component, OnInit } from '@angular/core';
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
    else {
      document.getElementById("searchResult").style.display = "";
    }
  }

  closeSearch() {
    this.show = false;
  }

}
