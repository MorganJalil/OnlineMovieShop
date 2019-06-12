import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../interfaces/IMovie';
import { DataService } from '../../services/data.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-movie-library',
  templateUrl: './movie-library.component.html',
  styleUrls: ['./movie-library.component.css']
})
export class MovieLibraryComponent implements OnInit {
  movies: IMovie[];
  @Input() product: IMovie;
  constructor(private service: DataService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.service.getMoviesData().subscribe((data) => { this.movies = data; 
    });
  }
  addMovieToCart(product){
    this.interactionService.sendCart(product);
  }

  redirectToDetails(id: number) {
    location.href = "/movie-info/" + id;
    console.log(id);
  }
}