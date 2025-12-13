import { TestBed } from '@angular/core/testing';

import { Camunda } from './camunda';

describe('Camunda', () => {
  let service: Camunda;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Camunda);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
