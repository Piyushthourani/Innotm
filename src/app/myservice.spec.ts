import { TestBed } from '@angular/core/testing';

import { Myservice } from './myservice';

describe('Myservice', () => {
  let service: Myservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Myservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
