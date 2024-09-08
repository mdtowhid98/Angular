import { TestBed } from '@angular/core/testing';

import { ResidenceService } from './residence.service';

describe('ResidenceService', () => {
  let service: ResidenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
