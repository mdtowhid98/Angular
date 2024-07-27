import { TestBed } from '@angular/core/testing';

import { RecieptsService } from './reciepts.service';

describe('RecieptsService', () => {
  let service: RecieptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecieptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
