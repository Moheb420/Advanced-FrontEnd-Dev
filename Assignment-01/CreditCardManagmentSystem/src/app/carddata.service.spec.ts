import { TestBed } from '@angular/core/testing';

import { CardDataService } from './carddata.service';

describe('CarddataService', () => {
  let service: CardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
