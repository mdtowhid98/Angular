import { TestBed } from '@angular/core/testing';

import { SalesproductService } from './salesproduct.service';

describe('SalesproductService', () => {
  let service: SalesproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
