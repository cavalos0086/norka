/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavGuardService } from './nav-guard.service';

describe('NavGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavGuardService]
    });
  });

  it('should ...', inject([NavGuardService], (service: NavGuardService) => {
    expect(service).toBeTruthy();
  }));
});
