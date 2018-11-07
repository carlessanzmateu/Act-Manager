import { TestBed } from '@angular/core/testing';

import { ActsService } from './acts.service';

describe('Acts.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActsService = TestBed.get(ActsService);
    expect(service).toBeTruthy();
  });
});
