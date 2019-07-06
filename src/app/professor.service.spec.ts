import { TestBed } from '@angular/core/testing';

import { Professoreservice } from './professor.service';

describe('Professoreservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Professoreservice = TestBed.get(Professoreservice);
    expect(service).toBeTruthy();
  });
});
