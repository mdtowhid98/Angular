import { TestBed } from '@angular/core/testing';

import { SalesDetailsService } from './sales-details.service';

describe('SalesDetailsService', () => {
  let service: SalesDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
