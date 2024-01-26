import { TestBed } from '@angular/core/testing';

import { NgCountdownService } from './ng-countdown-service.service';

describe('NgCountDownService', () => {
  let service: NgCountdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCountdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
