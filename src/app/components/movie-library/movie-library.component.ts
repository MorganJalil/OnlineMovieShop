import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../interfaces/IMovie';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-movie-library',
  templateUrl: './movie-library.component.html',
  styleUrls: ['./movie-library.component.css']
})
export class MovieLibraryComponent implements OnInit {
  movies: IMovie[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getLibraryData().subscribe((data) => { this.movies = data; 
    });
  }

  redirectToDetails(id: number) {
    location.href = "/movie-info/" + id;
    console.log(id);
  }
}