import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IMovie } from 'src/app/interfaces/IMovie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: DataService) { }
  movies: IMovie[];

  ngOnInit() {
  }

  search(searchString: string) {
    if (searchString) {
      this.service.searchMovies(searchString)
        .subscribe(movies => this.movies = movies);
        console.log(searchString);
        return searchString;
        
    }
  }

}
