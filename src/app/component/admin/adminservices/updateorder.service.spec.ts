import { TestBed } from '@angular/core/testing';

import { UpdateorderService } from './updateorder.service';

describe('UpdateorderService', () => {
  let service: UpdateorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
