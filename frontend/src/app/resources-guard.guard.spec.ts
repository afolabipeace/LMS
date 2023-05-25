import { TestBed } from '@angular/core/testing';

import { ResourcesGuardGuard } from './resources-guard.guard';

describe('ResourcesGuardGuard', () => {
  let guard: ResourcesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResourcesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
