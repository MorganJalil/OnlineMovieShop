import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
  it('should get products', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getMoviesData()).toBeTruthy();
  });

  it('should get categories', () => {
    const service: DataService = TestBed.get(DataService);
    service.getMovieCategoryData().subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
    });
  });
  
  it('should get orders', () => {
    const service: DataService = TestBed.get(DataService);
    service.getOrder().subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
    });
  });

});
