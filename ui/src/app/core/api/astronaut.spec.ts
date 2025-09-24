import { TestBed } from '@angular/core/testing';

import { Astronaut } from './astronaut';

describe('Astronaut', () => {
  let service: Astronaut;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Astronaut);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
