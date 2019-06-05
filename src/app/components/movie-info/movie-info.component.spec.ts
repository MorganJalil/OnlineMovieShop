import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoComponent } from './movie-info.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteStub } from 'src/app/testing/activatedroutestub';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MockDataService } from 'src/app/services/mock-data.service';

describe('DetailsComponent', () => {
  let component: MovieInfoComponent;
  let fixture: ComponentFixture<MovieInfoComponent>;

  let activatedRoute = new ActivatedRouteStub({ id: 76 });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieInfoComponent ],
      imports: [ HttpClientModule, RouterTestingModule.withRoutes([]) ],
      providers: [ { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: DataService, useClass: MockDataService } ]
    })
   // Override component's own provider to test with MockData.service
 

  .compileComponents();
}));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return movie by id', () => {
    component.getMovieById(76);
    expect(component.movie).toBeDefined();
    expect(component.movie.name).toBe('The Dark Knight');
  });



});
