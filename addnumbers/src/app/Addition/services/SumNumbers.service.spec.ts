import { TestBed } from '@angular/core/testing';

import { SumnumbersService } from './SumNumbers.service';

describe('SumnumbersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SumnumbersService = TestBed.get(SumnumbersService);
    expect(service).toBeTruthy();
  });
});
