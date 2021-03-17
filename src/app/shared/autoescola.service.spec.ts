import { TestBed } from '@angular/core/testing';

import { AutoescolaService } from './autoescola.service';

describe('AutoescolaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoescolaService = TestBed.get(AutoescolaService);
    expect(service).toBeTruthy();
  });
});
