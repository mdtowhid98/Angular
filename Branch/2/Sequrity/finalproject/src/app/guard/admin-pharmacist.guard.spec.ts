import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminPharmacistGuard } from './admin-pharmacist.guard';

describe('adminPharmacistGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminPharmacistGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
