import { TestBed } from '@angular/core/testing';

import { AddtobuyService } from './addtobuy.service';

describe('AddtobuyService', () => {
  let service: AddtobuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtobuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
