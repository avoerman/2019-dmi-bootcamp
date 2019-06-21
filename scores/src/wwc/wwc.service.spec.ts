import { TestBed } from '@angular/core/testing';

import { WwcService } from './wwc.service';

describe('WwcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WwcService = TestBed.get(WwcService);
    expect(service).toBeTruthy();
  });
});
