import { TestBed } from '@angular/core/testing';

import { NgCountdownServiceService } from './ng-countdown-service.service';

describe('NgCountdownServiceService', () => {
  let service: NgCountdownServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCountdownServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
