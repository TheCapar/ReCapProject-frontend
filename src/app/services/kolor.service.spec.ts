import { TestBed } from '@angular/core/testing';

import { KolorService } from './kolor.service';

describe('KolorService', () => {
  let service: KolorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KolorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
