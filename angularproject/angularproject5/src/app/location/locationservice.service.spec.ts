import { TestBed } from '@angular/core/testing';

import { LocationserviceService } from './locationservice.service';

describe('LocationserviceService', () => {
  let service: LocationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
