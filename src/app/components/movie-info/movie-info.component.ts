import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { IMovie } from 'src/app/interfaces/IMovie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: DataService) { }

  movie: IMovie = { id: 0, name: '', price: 0, description: '', imageUrl: '', year: 0, added: ''};
  ngOnInit() {
    this.route.paramMap.subscribe(myParams => {
      const id: number = +myParams.get('id');
      this.getMovieById(id);
    })
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
