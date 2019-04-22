import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLibraryComponent } from './movie-library.component';
import { MockDataService } from '../../services/mock-data.service';

describe('MovieLibraryComponent', () => {
  let component: MovieLibraryComponent;
  let fixture: ComponentFixture<MovieLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLibraryComponent ]
    })
    .overrideComponent(MovieLibraryComponent, { set: { providers: [ {provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 4 movies', () => {
    expect(component.movies.length).toBe(4);
  });
});
