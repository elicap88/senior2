import { TestBed } from '@angular/core/testing';

import { StaticJobsService } from './static-jobs.service';

describe('StaticJobsService', () => {
  let service: StaticJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
