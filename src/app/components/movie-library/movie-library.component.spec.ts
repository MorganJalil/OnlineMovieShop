import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLibraryComponent } from './movie-library.component';
import { MockDataService } from '../../services/mock-data.service';
import { DataService } from 'src/app/services/data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('MovieLibraryComponent', () => {
  let component: MovieLibraryComponent;
  let fixture: ComponentFixture<MovieLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLibraryComponent ],
      imports:[ RouterTestingModule, HttpClientModule ]
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
    const fixture = TestBed.createComponent(MovieLibraryComponent);
    
    expect(component.movies.length).toEqual(4);
  });

});
